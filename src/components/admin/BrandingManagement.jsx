import React, { useState, useEffect } from 'react';
import { getBranding, saveBranding } from '../../supabaseService';


const BrandingManagement = () => {
  const [branding, setBranding] = useState({
    siteTitle: 'Image Compress',
    logoUrl: '',
    logoFile: null
  });

  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [logoPreview, setLogoPreview] = useState('');

  // Load branding settings from Firestore on component mount
  useEffect(() => {
    const loadBranding = async () => {
      try {
        setInitialLoading(true);
        const data = await getBranding();
        if (data) {
          setBranding(prev => ({ ...prev, ...data }));
          if (data.logoUrl) {
            setLogoPreview(data.logoUrl);
          }
        }
      } catch (error) {
        console.error('Error loading branding settings:', error);
        setMessage('Error loading branding settings. Please refresh the page.');
      } finally {
        setInitialLoading(false);
      }
    };

    loadBranding();
  }, []);

  const handleSave = async () => {
    setLoading(true);
    setMessage('');

    try {
      // Handle logo upload if there's a new file
      if (branding.logoFile) {
        // Convert file to base64 for storage
        const reader = new FileReader();
        reader.onload = async (e) => {
          const base64Logo = e.target.result;

          // Update branding with new logo
          const updatedBranding = {
            siteTitle: branding.siteTitle,
            logoUrl: base64Logo
          };

          try {
            await saveBranding(updatedBranding);
            setMessage('Branding settings saved successfully across all devices!');
          } catch (error) {
            console.error('Error saving branding:', error);
            setMessage('Error saving branding settings. Please try again.');
          } finally {
            setLoading(false);
          }
        };
        reader.readAsDataURL(branding.logoFile);
        return; // Exit early, the rest will be handled in the reader.onload
      }

      // Save branding settings to Firestore
      const brandingToSave = {
        siteTitle: branding.siteTitle,
        logoUrl: branding.logoUrl
      };

      await saveBranding(brandingToSave);
      setMessage('Branding settings saved successfully across all devices!');
    } catch (error) {
      console.error('Error saving branding:', error);
      setMessage('Error saving branding settings. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setBranding(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml'];
      if (!allowedTypes.includes(file.type)) {
        setMessage('Please upload a PNG, JPG, or SVG file.');
        return;
      }

      // Validate file size (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        setMessage('Logo file size must be less than 2MB.');
        return;
      }

      setBranding(prev => ({
        ...prev,
        logoFile: file
      }));

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoPreview(e.target.result);
      };
      reader.readAsDataURL(file);

      setMessage('');
    }
  };

  const removeLogo = () => {
    setBranding(prev => ({
      ...prev,
      logoUrl: '',
      logoFile: null
    }));
    setLogoPreview('');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Logo & Title Management</h2>
        <button
          onClick={handleSave}
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Saving...' : 'Save Changes'}
        </button>
      </div>

      {message && (
        <div className={`p-4 rounded-lg ${message.includes('Error') ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'
          }`}>
          {message}
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Website Title</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Site Title
            </label>
            <input
              type="text"
              value={branding.siteTitle}
              onChange={(e) => handleInputChange('siteTitle', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your website title"
            />
            <p className="text-sm text-gray-500 mt-1">
              This title will appear in the navbar and footer across the entire website.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Website Logo</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Logo
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="file"
                accept="image/png,image/jpeg,image/jpg,image/svg+xml"
                onChange={handleLogoUpload}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              {logoPreview && (
                <button
                  onClick={removeLogo}
                  className="px-3 py-2 text-sm text-red-600 hover:text-red-800 border border-red-300 rounded-md hover:bg-red-50"
                >
                  Remove
                </button>
              )}
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Upload a PNG, JPG, or SVG file (max 2MB). Recommended size: 40x40px or larger.
            </p>
          </div>

          {logoPreview && (
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Logo Preview
              </label>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <img
                  src={logoPreview}
                  alt="Logo preview"
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">Current Logo</p>
                  <p className="text-xs text-gray-500">This will replace the existing logo</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="text-sm font-medium text-blue-900 mb-2">Live Preview</h4>
        <p className="text-sm text-blue-700">
          Changes will be applied immediately across the website. The navbar and footer will update automatically without requiring a page refresh.
        </p>
      </div>
    </div>
  );
};

export default BrandingManagement;
