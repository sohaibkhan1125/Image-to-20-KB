import React, { useState, useEffect } from 'react';

const GeneralSettings = () => {
  const [settings, setSettings] = useState({
    siteName: 'Image Compressor',
    maxFileSize: 50,
    maintenanceMode: false
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Load settings from localStorage on component mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('adminSettings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error('Error loading settings:', error);
      }
    }
  }, []);

  const handleSave = async () => {
    setLoading(true);
    setMessage('');
    
    try {
      // Save settings to localStorage
      localStorage.setItem('adminSettings', JSON.stringify(settings));
      
      // Update the main website's file size limit
      window.dispatchEvent(new CustomEvent('adminSettingsUpdated', { 
        detail: { maxFileSize: settings.maxFileSize } 
      }));
      
      // Handle maintenance mode
      if (settings.maintenanceMode) {
        localStorage.setItem('maintenanceMode', 'true');
        window.dispatchEvent(new CustomEvent('maintenanceModeChanged', { 
          detail: { enabled: true } 
        }));
      } else {
        localStorage.removeItem('maintenanceMode');
        window.dispatchEvent(new CustomEvent('maintenanceModeChanged', { 
          detail: { enabled: false } 
        }));
      }
      
      setMessage('Settings saved successfully!');
    } catch (error) {
      setMessage('Error saving settings. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">General Settings</h2>
        <button
          onClick={handleSave}
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Saving...' : 'Save Settings'}
        </button>
      </div>

      {message && (
        <div className={`p-4 rounded-lg ${
          message.includes('Error') ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'
        }`}>
          {message}
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Basic Configuration</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Site Name
            </label>
            <input
              type="text"
              value={settings.siteName}
              onChange={(e) => handleInputChange('siteName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Maximum File Size (MB)
            </label>
            <input
              type="number"
              value={settings.maxFileSize}
              onChange={(e) => handleInputChange('maxFileSize', parseInt(e.target.value))}
              min="1"
              max="100"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-sm text-gray-500 mt-1">
              This setting will be displayed to users on the main website upload area.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">System Controls</h3>
        
        <div className="space-y-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={settings.maintenanceMode}
              onChange={(e) => handleInputChange('maintenanceMode', e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <div className="ml-3">
              <div className="text-sm font-medium text-gray-700">Maintenance Mode</div>
              <div className="text-sm text-gray-500">
                When enabled, the entire website will show a maintenance message
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default GeneralSettings;
