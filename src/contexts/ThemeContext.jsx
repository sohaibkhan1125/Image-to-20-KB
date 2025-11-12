import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState({
    id: 'default',
    name: 'Default Blue',
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
  });

  useEffect(() => {
    // Load saved theme on mount
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
      // Load the full theme data
      const savedThemeData = localStorage.getItem('themeData');
      if (savedThemeData) {
        try {
          setCurrentTheme(JSON.parse(savedThemeData));
        } catch (error) {
          console.error('Error loading theme data:', error);
        }
      }
    }

    // Listen for theme changes from admin panel
    const handleThemeChange = (event) => {
      const newTheme = event.detail;
      setCurrentTheme(newTheme);
      localStorage.setItem('selectedTheme', newTheme.id);
      localStorage.setItem('themeData', JSON.stringify(newTheme));
    };

    window.addEventListener('themeChanged', handleThemeChange);
    return () => window.removeEventListener('themeChanged', handleThemeChange);
  }, []);

  const applyTheme = (theme) => {
    const root = document.documentElement;
    
    // Apply CSS custom properties
    root.style.setProperty('--color-primary', theme.colors.primary);
    root.style.setProperty('--color-secondary', theme.colors.secondary);
    root.style.setProperty('--color-accent', theme.colors.accent);
    root.style.setProperty('--color-background', theme.colors.background);
    root.style.setProperty('--color-surface', theme.colors.surface);
    root.style.setProperty('--color-text', theme.colors.text);
    root.style.setProperty('--color-text-secondary', theme.colors.textSecondary);
    root.style.setProperty('--color-border', theme.colors.border);
    root.style.setProperty('--color-success', theme.colors.success);
    root.style.setProperty('--color-warning', theme.colors.warning);
    root.style.setProperty('--color-error', theme.colors.error);
  };

  useEffect(() => {
    applyTheme(currentTheme);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
