import React, { useEffect, useState } from 'react';

const HeroSectionManagement = () => {
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const savedHeading = localStorage.getItem('heroHeading');
    const savedDescription = localStorage.getItem('heroDescription');
    if (savedHeading) setHeading(savedHeading);
    if (savedDescription) setDescription(savedDescription);
  }, []);

  const handleSave = async () => {
    setLoading(true);
    setMessage('');
    try {
      localStorage.setItem('heroHeading', heading);
      localStorage.setItem('heroDescription', description);
      window.dispatchEvent(
        new CustomEvent('heroSectionUpdated', {
          detail: { heading, description }
        })
      );
      setMessage('Hero section updated successfully!');
    } catch (e) {
      setMessage('Error saving hero section. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setHeading('');
    setDescription('');
    setMessage('');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Hero Section Management</h2>
        <div className="flex space-x-3">
          <button
            onClick={handleClear}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200"
          >
            Clear
          </button>
          <button
            onClick={handleSave}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {loading ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>

      {message && (
        <div className={`p-4 rounded-lg ${
          message.includes('Error') ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'
        }`}>
          {message}
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Heading</label>
          <input
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter hero heading"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full min-h-[120px] px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter hero description"
          />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Live Preview</h3>
        <section className="pt-10 pb-10 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              {heading || 'Compress Images to Any Size'}
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              {description || 'Reduce your image file sizes while maintaining quality. Upload any image and compress it to your exact target size in KB.'}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSectionManagement;

