import React, { useState, useEffect } from 'react';
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram, 
  FaYoutube, 
  FaGithub, 
  FaTiktok, 
  FaDiscord, 
  FaTelegram, 
  FaWhatsapp,
  FaGlobe,
  FaLink
} from 'react-icons/fa';

const FooterManagement = () => {
  const [socialMediaLinks, setSocialMediaLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [newLink, setNewLink] = useState({
    name: '',
    url: '',
    icon: 'default'
  });

  // Available social media icons
  const socialMediaIcons = {
    facebook: {
      name: 'Facebook',
      icon: FaFacebook
    },
    twitter: {
      name: 'Twitter',
      icon: FaTwitter
    },
    linkedin: {
      name: 'LinkedIn',
      icon: FaLinkedin
    },
    instagram: {
      name: 'Instagram',
      icon: FaInstagram
    },
    youtube: {
      name: 'YouTube',
      icon: FaYoutube
    },
    github: {
      name: 'GitHub',
      icon: FaGithub
    },
    tiktok: {
      name: 'TikTok',
      icon: FaTiktok
    },
    discord: {
      name: 'Discord',
      icon: FaDiscord
    },
    telegram: {
      name: 'Telegram',
      icon: FaTelegram
    },
    whatsapp: {
      name: 'WhatsApp',
      icon: FaWhatsapp
    }
  };

  // Load social media links on component mount
  useEffect(() => {
    const loadSocialMediaLinks = () => {
      const savedLinks = localStorage.getItem('socialMediaLinks');
      if (savedLinks) {
        try {
          setSocialMediaLinks(JSON.parse(savedLinks));
        } catch (error) {
          console.error('Error loading social media links:', error);
        }
      }
    };

    loadSocialMediaLinks();
  }, []);

  const handleAddLink = () => {
    if (!newLink.name.trim() || !newLink.url.trim()) {
      setMessage('Please fill in both name and URL fields.');
      return;
    }

    // Validate URL
    try {
      new URL(newLink.url);
    } catch {
      setMessage('Please enter a valid URL.');
      return;
    }

    const link = {
      id: Date.now().toString(),
      name: newLink.name.trim(),
      url: newLink.url.trim(),
      icon: newLink.icon
    };

    const updatedLinks = [...socialMediaLinks, link];
    setSocialMediaLinks(updatedLinks);
    localStorage.setItem('socialMediaLinks', JSON.stringify(updatedLinks));
    
    // Dispatch event to update footer
    window.dispatchEvent(new CustomEvent('socialMediaUpdated', { 
      detail: updatedLinks 
    }));

    setNewLink({ name: '', url: '', icon: 'default' });
    setMessage('Social media link added successfully!');
  };

  const handleEditLink = (id) => {
    const link = socialMediaLinks.find(l => l.id === id);
    if (link) {
      setNewLink({
        name: link.name,
        url: link.url,
        icon: link.icon
      });
      setEditingId(id);
    }
  };

  const handleUpdateLink = () => {
    if (!newLink.name.trim() || !newLink.url.trim()) {
      setMessage('Please fill in both name and URL fields.');
      return;
    }

    // Validate URL
    try {
      new URL(newLink.url);
    } catch {
      setMessage('Please enter a valid URL.');
      return;
    }

    const updatedLinks = socialMediaLinks.map(link => 
      link.id === editingId 
        ? { ...link, name: newLink.name.trim(), url: newLink.url.trim(), icon: newLink.icon }
        : link
    );

    setSocialMediaLinks(updatedLinks);
    localStorage.setItem('socialMediaLinks', JSON.stringify(updatedLinks));
    
    // Dispatch event to update footer
    window.dispatchEvent(new CustomEvent('socialMediaUpdated', { 
      detail: updatedLinks 
    }));

    setNewLink({ name: '', url: '', icon: 'default' });
    setEditingId(null);
    setMessage('Social media link updated successfully!');
  };

  const handleDeleteLink = (id) => {
    const updatedLinks = socialMediaLinks.filter(link => link.id !== id);
    setSocialMediaLinks(updatedLinks);
    localStorage.setItem('socialMediaLinks', JSON.stringify(updatedLinks));
    
    // Dispatch event to update footer
    window.dispatchEvent(new CustomEvent('socialMediaUpdated', { 
      detail: updatedLinks 
    }));

    setMessage('Social media link deleted successfully!');
  };

  const handleCancelEdit = () => {
    setNewLink({ name: '', url: '', icon: 'default' });
    setEditingId(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Footer Management</h2>
      </div>

      {message && (
        <div className={`p-4 rounded-lg ${
          message.includes('Error') ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'
        }`}>
          {message}
        </div>
      )}

      {/* Add/Edit Form */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          {editingId ? 'Edit Social Media Link' : 'Add New Social Media Link'}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Platform Name
            </label>
            <input
              type="text"
              value={newLink.name}
              onChange={(e) => setNewLink({ ...newLink, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., Facebook, Instagram, LinkedIn"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              URL
            </label>
            <input
              type="url"
              value={newLink.url}
              onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://example.com"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Icon
          </label>
          <select
            value={newLink.icon}
            onChange={(e) => setNewLink({ ...newLink, icon: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="default">Default</option>
            {Object.entries(socialMediaIcons).map(([key, icon]) => (
              <option key={key} value={key}>{icon.name}</option>
            ))}
          </select>
        </div>

        <div className="flex space-x-3 mt-6">
          <button
            onClick={editingId ? handleUpdateLink : handleAddLink}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            {editingId ? 'Update Link' : 'Add Link'}
          </button>
          
          {editingId && (
            <button
              onClick={handleCancelEdit}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* Current Links */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Current Social Media Links</h3>
        
        {socialMediaLinks.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No social media links added yet.</p>
        ) : (
          <div className="space-y-3">
            {socialMediaLinks.map((link) => (
              <div key={link.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                    {(() => {
                      if (link.icon !== 'default' && socialMediaIcons[link.icon]) {
                        const IconComponent = socialMediaIcons[link.icon].icon;
                        return <IconComponent className="w-6 h-6 text-gray-600" />;
                      }
                      return <FaGlobe className="w-6 h-6 text-gray-400" />;
                    })()}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{link.name}</p>
                    <p className="text-sm text-gray-500 truncate max-w-xs">{link.url}</p>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEditLink(link.id)}
                    className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors duration-200"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteLink(link.id)}
                    className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors duration-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Preview */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Footer Preview</h3>
        <div className="bg-gray-900 p-6 rounded-lg">
          <div className="flex space-x-4">
            {socialMediaLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 transition-colors duration-200"
                title={link.name}
              >
                {(() => {
                  if (link.icon !== 'default' && socialMediaIcons[link.icon]) {
                    const IconComponent = socialMediaIcons[link.icon].icon;
                    return <IconComponent className="w-6 h-6" />;
                  }
                  return <FaGlobe className="w-6 h-6" />;
                })()}
              </a>
            ))}
            {socialMediaLinks.length === 0 && (
              <p className="text-gray-400 text-sm">No social media links to display</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterManagement;
