import React, { useState, useEffect } from 'react';
import { getSelectedTheme, saveSelectedTheme } from '../../supabaseService';


const AppearanceManagement = () => {
  const [selectedTheme, setSelectedTheme] = useState('default');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Define 20 different color schemes
  const colorSchemes = [
    {
      id: 'default',
      name: 'Default Blue',
      description: 'Classic blue theme',
      colors: {
        primary: '#3B82F6',
        secondary: '#1E40AF',
        accent: '#60A5FA',
        background: '#F8FAFC',
        surface: '#FFFFFF',
        text: '#1F2937',
        textSecondary: '#6B7280',
        border: '#E5E7EB',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444'
      }
    },
    {
      id: 'dark',
      name: 'Dark Mode',
      description: 'Modern dark theme',
      colors: {
        primary: '#8B5CF6',
        secondary: '#7C3AED',
        accent: '#A78BFA',
        background: '#111827',
        surface: '#1F2937',
        text: '#F9FAFB',
        textSecondary: '#D1D5DB',
        border: '#374151',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444'
      }
    },
    {
      id: 'emerald',
      name: 'Emerald',
      description: 'Fresh green theme',
      colors: {
        primary: '#10B981',
        secondary: '#059669',
        accent: '#34D399',
        background: '#F0FDF4',
        surface: '#FFFFFF',
        text: '#064E3B',
        textSecondary: '#6B7280',
        border: '#D1FAE5',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444'
      }
    },
    {
      id: 'sunset',
      name: 'Sunset',
      description: 'Warm orange theme',
      colors: {
        primary: '#F97316',
        secondary: '#EA580C',
        accent: '#FB923C',
        background: '#FFF7ED',
        surface: '#FFFFFF',
        text: '#9A3412',
        textSecondary: '#6B7280',
        border: '#FED7AA',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444'
      }
    },
    {
      id: 'ocean',
      name: 'Ocean',
      description: 'Deep blue ocean theme',
      colors: {
        primary: '#0EA5E9',
        secondary: '#0284C7',
        accent: '#38BDF8',
        background: '#F0F9FF',
        surface: '#FFFFFF',
        text: '#0C4A6E',
        textSecondary: '#6B7280',
        border: '#BAE6FD',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444'
      }
    },
    {
      id: 'purple-glow',
      name: 'Purple Glow',
      description: 'Vibrant purple theme',
      colors: {
        primary: '#8B5CF6',
        secondary: '#7C3AED',
        accent: '#A78BFA',
        background: '#FAF5FF',
        surface: '#FFFFFF',
        text: '#581C87',
        textSecondary: '#6B7280',
        border: '#E9D5FF',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444'
      }
    },
    {
      id: 'rose',
      name: 'Rose',
      description: 'Elegant pink theme',
      colors: {
        primary: '#F43F5E',
        secondary: '#E11D48',
        accent: '#FB7185',
        background: '#FFF1F2',
        surface: '#FFFFFF',
        text: '#881337',
        textSecondary: '#6B7280',
        border: '#FECDD3',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444'
      }
    },
    {
      id: 'forest',
      name: 'Forest',
      description: 'Natural green theme',
      colors: {
        primary: '#16A34A',
        secondary: '#15803D',
        accent: '#4ADE80',
        background: '#F0FDF4',
        surface: '#FFFFFF',
        text: '#14532D',
        textSecondary: '#6B7280',
        border: '#BBF7D0',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444'
      }
    },
    {
      id: 'midnight',
      name: 'Midnight',
      description: 'Deep dark theme',
      colors: {
        primary: '#6366F1',
        secondary: '#4F46E5',
        accent: '#818CF8',
        background: '#0F172A',
        surface: '#1E293B',
        text: '#F1F5F9',
        textSecondary: '#94A3B8',
        border: '#334155',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444'
      }
    },
    {
      id: 'golden',
      name: 'Golden',
      description: 'Luxury gold theme',
      colors: {
        primary: '#F59E0B',
        secondary: '#D97706',
        accent: '#FCD34D',
        background: '#FFFBEB',
        surface: '#FFFFFF',
        text: '#92400E',
        textSecondary: '#6B7280',
        border: '#FDE68A',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444'
      }
    },
    {
      id: 'coral',
      name: 'Coral',
      description: 'Vibrant coral theme',
      colors: {
        primary: '#FF6B6B',
        secondary: '#FF5252',
        accent: '#FF8A80',
        background: '#FFF5F5',
        surface: '#FFFFFF',
        text: '#B71C1C',
        textSecondary: '#6B7280',
        border: '#FFCDD2',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444'
      }
    },
    {
      id: 'lavender',
      name: 'Lavender',
      description: 'Soft purple theme',
      colors: {
        primary: '#A855F7',
        secondary: '#9333EA',
        accent: '#C084FC',
        background: '#FAF5FF',
        surface: '#FFFFFF',
        text: '#6B21A8',
        textSecondary: '#6B7280',
        border: '#E9D5FF',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444'
      }
    },
    {
      id: 'mint',
      name: 'Mint',
      description: 'Fresh mint theme',
      colors: {
        primary: '#06B6D4',
        secondary: '#0891B2',
        accent: '#22D3EE',
        background: '#F0FDFA',
        surface: '#FFFFFF',
        text: '#0F766E',
        textSecondary: '#6B7280',
        border: '#99F6E4',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444'
      }
    },
    {
      id: 'cherry',
      name: 'Cherry',
      description: 'Rich red theme',
      colors: {
        primary: '#DC2626',
        secondary: '#B91C1C',
        accent: '#F87171',
        background: '#FEF2F2',
        surface: '#FFFFFF',
        text: '#991B1B',
        textSecondary: '#6B7280',
        border: '#FECACA',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444'
      }
    },
    {
      id: 'sky',
      name: 'Sky Blue',
      description: 'Light blue theme',
      colors: {
        primary: '#0EA5E9',
        secondary: '#0284C7',
        accent: '#38BDF8',
        background: '#F0F9FF',
        surface: '#FFFFFF',
        text: '#0C4A6E',
        textSecondary: '#6B7280',
        border: '#BAE6FD',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444'
      }
    },
    {
      id: 'amber',
      name: 'Amber',
      description: 'Warm amber theme',
      colors: {
        primary: '#F59E0B',
        secondary: '#D97706',
        accent: '#FCD34D',
        background: '#FFFBEB',
        surface: '#FFFFFF',
        text: '#92400E',
        textSecondary: '#6B7280',
        border: '#FDE68A',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444'
      }
    },
    {
      id: 'teal',
      name: 'Teal',
      description: 'Modern teal theme',
      colors: {
        primary: '#14B8A6',
        secondary: '#0D9488',
        accent: '#5EEAD4',
        background: '#F0FDFA',
        surface: '#FFFFFF',
        text: '#134E4A',
        textSecondary: '#6B7280',
        border: '#CCFBF1',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444'
      }
    },
    {
      id: 'indigo',
      name: 'Indigo',
      description: 'Deep indigo theme',
      colors: {
        primary: '#6366F1',
        secondary: '#4F46E5',
        accent: '#818CF8',
        background: '#EEF2FF',
        surface: '#FFFFFF',
        text: '#3730A3',
        textSecondary: '#6B7280',
        border: '#C7D2FE',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444'
      }
    },
    {
      id: 'lime',
      name: 'Lime',
      description: 'Bright lime theme',
      colors: {
        primary: '#84CC16',
        secondary: '#65A30D',
        accent: '#A3E635',
        background: '#F7FEE7',
        surface: '#FFFFFF',
        text: '#365314',
        textSecondary: '#6B7280',
        border: '#D9F99D',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444'
      }
    },
    {
      id: 'slate',
      name: 'Slate',
      description: 'Professional gray theme',
      colors: {
        primary: '#64748B',
        secondary: '#475569',
        accent: '#94A3B8',
        background: '#F8FAFC',
        surface: '#FFFFFF',
        text: '#1E293B',
        textSecondary: '#6B7280',
        border: '#E2E8F0',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444'
      }
    }
  ];

  // Load current theme on component mount
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const { themeId } = await getSelectedTheme();
        if (themeId) {
          setSelectedTheme(themeId);
        }
      } catch (error) {
        console.error('Error loading theme:', error);
      }
    };
    loadTheme();
  }, []);

  const handleThemeSelect = (themeId) => {
    setSelectedTheme(themeId);
  };

  const handleSave = async () => {
    setLoading(true);
    setMessage('');

    try {
      // Save selected theme to Supabase
      const selectedScheme = colorSchemes.find(scheme => scheme.id === selectedTheme);
      await saveSelectedTheme(selectedTheme, selectedScheme);

      // Dispatch event to update the website theme
      window.dispatchEvent(new CustomEvent('themeChanged', {
        detail: selectedScheme
      }));

      setMessage('Theme applied successfully! The website will update immediately.');
    } catch (error) {
      console.error('Error applying theme:', error);
      setMessage('Error applying theme. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getSelectedScheme = () => {
    return colorSchemes.find(scheme => scheme.id === selectedTheme) || colorSchemes[0];
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Appearance</h2>
        <button
          onClick={handleSave}
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Applying...' : 'Apply Theme'}
        </button>
      </div>

      {message && (
        <div className={`p-4 rounded-lg ${message.includes('Error') ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'
          }`}>
          {message}
        </div>
      )}

      {/* Current Theme Preview */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Current Theme Preview</h3>
        <div
          className="p-6 rounded-lg border-2 border-dashed"
          style={{
            backgroundColor: getSelectedScheme().colors.background,
            borderColor: getSelectedScheme().colors.border,
            color: getSelectedScheme().colors.text
          }}
        >
          <div className="flex items-center space-x-3 mb-4">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: getSelectedScheme().colors.primary }}
            >
              <span className="text-white font-bold text-sm">IC</span>
            </div>
            <span
              className="text-xl font-bold"
              style={{ color: getSelectedScheme().colors.text }}
            >
              {getSelectedScheme().name}
            </span>
          </div>
          <div className="space-y-2">
            <div
              className="px-4 py-2 rounded-lg"
              style={{ backgroundColor: getSelectedScheme().colors.primary, color: 'white' }}
            >
              Primary Button
            </div>
            <div
              className="px-4 py-2 rounded-lg border"
              style={{
                backgroundColor: getSelectedScheme().colors.surface,
                borderColor: getSelectedScheme().colors.border,
                color: getSelectedScheme().colors.text
              }}
            >
              Secondary Button
            </div>
          </div>
        </div>
      </div>

      {/* Color Scheme Selection */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Choose Color Scheme</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {colorSchemes.map((scheme) => (
            <div
              key={scheme.id}
              onClick={() => handleThemeSelect(scheme.id)}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${selectedTheme === scheme.id
                ? 'border-blue-500 bg-blue-50 shadow-md'
                : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div
                  className="w-6 h-6 rounded-full"
                  style={{ backgroundColor: scheme.colors.primary }}
                ></div>
                <div
                  className="w-6 h-6 rounded-full"
                  style={{ backgroundColor: scheme.colors.secondary }}
                ></div>
                <div
                  className="w-6 h-6 rounded-full"
                  style={{ backgroundColor: scheme.colors.accent }}
                ></div>
              </div>
              <h4 className="font-medium text-gray-900 mb-1">{scheme.name}</h4>
              <p className="text-sm text-gray-500">{scheme.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Theme Information */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="text-sm font-medium text-blue-900 mb-2">Theme Information</h4>
        <p className="text-sm text-blue-700">
          Selected theme will be applied instantly across the entire website including navbar,
          footer, buttons, input fields, and all other components. Changes are automatically saved.
        </p>
      </div>
    </div>
  );
};

export default AppearanceManagement;
