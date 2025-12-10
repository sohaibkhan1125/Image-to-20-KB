// ========================================
// Supabase Service - Content Management
// ========================================
// This service replaces JSONBin.io for content management
// All website content is stored in Supabase database

import { supabase } from '../lib/supabaseClient';

// ========================================
// CORE FUNCTIONS
// ========================================

/**
 * Save content to Supabase (upsert by slug)
 * @param {string} slug - Unique identifier for the content
 * @param {any} content - Content to save (will be JSON stringified)
 * @returns {Promise<void>}
 */
export const saveContent = async (slug, content) => {
    try {
        const contentString = typeof content === 'string' ? content : JSON.stringify(content);

        const { data, error } = await supabase
            .from('website_content')
            .upsert(
                {
                    slug,
                    content: contentString,
                    updated_at: new Date().toISOString()
                },
                { onConflict: 'slug' }
            );

        if (error) {
            console.error('Supabase Save Error:', error);
            throw error;
        }

        return data;
    } catch (error) {
        console.error(`Error saving content for ${slug}:`, error);
        throw error;
    }
};

/**
 * Get content from Supabase by slug
 * @param {string} slug - Unique identifier for the content
 * @returns {Promise<any>} Content data (parsed from JSON if applicable)
 */
export const getContent = async (slug) => {
    try {
        const { data, error } = await supabase
            .from('website_content')
            .select('content')
            .eq('slug', slug)
            .single();

        if (error) {
            if (error.code === 'PGRST116') {
                // No rows found - return null
                return null;
            }
            console.error('Supabase Get Error:', error);
            throw error;
        }

        if (!data) {
            return null;
        }

        // Try to parse JSON, if it fails return as string
        try {
            return JSON.parse(data.content);
        } catch {
            return data.content;
        }
    } catch (error) {
        console.error(`Error getting content for ${slug}:`, error);
        throw error;
    }
};

/**
 * Subscribe to content changes using Supabase Realtime
 * @param {string} slug - Unique identifier for the content
 * @param {function} callback - Callback function to receive updates
 * @returns {function} Unsubscribe function
 */
export const subscribeToContent = (slug, callback) => {
    // Initial fetch
    getContent(slug).then(callback).catch(console.error);

    // Subscribe to realtime changes
    const channel = supabase
        .channel(`content-${slug}`)
        .on(
            'postgres_changes',
            {
                event: '*',
                schema: 'public',
                table: 'website_content',
                filter: `slug=eq.${slug}`,
            },
            (payload) => {
                try {
                    const content = payload.new?.content;
                    if (content) {
                        try {
                            callback(JSON.parse(content));
                        } catch {
                            callback(content);
                        }
                    }
                } catch (error) {
                    console.error('Error in realtime subscription:', error);
                }
            }
        )
        .subscribe();

    // Return unsubscribe function
    return () => {
        supabase.removeChannel(channel);
    };
};

// ========================================
// HERO SECTION FUNCTIONS
// ========================================

/**
 * Save hero section data
 * @param {object} data - Hero section data {heading, description}
 * @returns {Promise<void>}
 */
export const saveHeroSection = async (data) => {
    return saveContent('hero_section', data);
};

/**
 * Get hero section data
 * @returns {Promise<object|null>} Hero section data
 */
export const getHeroSection = async () => {
    return getContent('hero_section');
};

/**
 * Subscribe to hero section changes
 * @param {function} callback - Callback function
 * @returns {function} Unsubscribe function
 */
export const subscribeToHeroSection = (callback) => {
    return subscribeToContent('hero_section', callback);
};

// ========================================
// HOME PAGE CONTENT FUNCTIONS
// ========================================

/**
 * Save home page content
 * @param {string} content - HTML content
 * @returns {Promise<void>}
 */
export const saveHomePageContent = async (content) => {
    return saveContent('homepage_text', content);
};

/**
 * Get home page content
 * @returns {Promise<string>} HTML content
 */
export const getHomePageContent = async () => {
    const content = await getContent('homepage_text');
    return content || '';
};

/**
 * Subscribe to home page content changes
 * @param {function} callback - Callback function
 * @returns {function} Unsubscribe function
 */
export const subscribeToHomePageContent = (callback) => {
    return subscribeToContent('homepage_text', callback);
};

// ========================================
// BRANDING FUNCTIONS
// ========================================

/**
 * Save branding data
 * @param {object} data - Branding data {siteTitle, logoUrl}
 * @returns {Promise<void>}
 */
export const saveBranding = async (data) => {
    return saveContent('branding', data);
};

/**
 * Get branding data
 * @returns {Promise<object|null>} Branding data
 */
export const getBranding = async () => {
    return getContent('branding');
};

/**
 * Subscribe to branding changes
 * @param {function} callback - Callback function
 * @returns {function} Unsubscribe function
 */
export const subscribeToBranding = (callback) => {
    return subscribeToContent('branding', callback);
};

// ========================================
// FOOTER LINKS FUNCTIONS
// ========================================

/**
 * Save footer links
 * @param {array} links - Array of social media links
 * @returns {Promise<void>}
 */
export const saveFooterLinks = async (links) => {
    return saveContent('footer_links', { links });
};

/**
 * Get footer links
 * @returns {Promise<array>} Array of social media links
 */
export const getFooterLinks = async () => {
    const data = await getContent('footer_links');
    return data?.links || [];
};

/**
 * Subscribe to footer links changes
 * @param {function} callback - Callback function
 * @returns {function} Unsubscribe function
 */
export const subscribeToFooterLinks = (callback) => {
    return subscribeToContent('footer_links', (data) => {
        callback(data?.links || []);
    });
};

// ========================================
// GENERAL SETTINGS FUNCTIONS
// ========================================

/**
 * Save general settings
 * @param {object} settings - Settings object
 * @returns {Promise<void>}
 */
export const saveGeneralSettings = async (settings) => {
    return saveContent('general_settings', settings);
};

/**
 * Get general settings
 * @returns {Promise<object|null>} Settings object
 */
export const getGeneralSettings = async () => {
    return getContent('general_settings');
};

/**
 * Subscribe to general settings changes
 * @param {function} callback - Callback function
 * @returns {function} Unsubscribe function
 */
export const subscribeToGeneralSettings = (callback) => {
    return subscribeToContent('general_settings', callback);
};

// ========================================
// THEME FUNCTIONS (replacing localStorage)
// ========================================

/**
 * Save selected theme
 * @param {string} themeId - Theme ID
 * @param {object} themeData - Theme data object
 * @returns {Promise<void>}
 */
export const saveSelectedTheme = async (themeId, themeData) => {
    await saveContent('selected_theme', themeId);
    await saveContent('theme_data', themeData);
};

/**
 * Get selected theme
 * @returns {Promise<{themeId: string, themeData: object}>} Theme info
 */
export const getSelectedTheme = async () => {
    const themeId = await getContent('selected_theme');
    const themeData = await getContent('theme_data');
    return { themeId, themeData };
};

/**
 * Subscribe to theme changes
 * @param {function} callback - Callback function receives {themeId, themeData}
 * @returns {function} Unsubscribe function
 */
export const subscribeToTheme = (callback) => {
    let currentThemeId = null;
    let currentThemeData = null;

    const unsubscribeId = subscribeToContent('selected_theme', (themeId) => {
        currentThemeId = themeId;
        if (currentThemeData !== null) {
            callback({ themeId: currentThemeId, themeData: currentThemeData });
        }
    });

    const unsubscribeData = subscribeToContent('theme_data', (themeData) => {
        currentThemeData = themeData;
        if (currentThemeId !== null) {
            callback({ themeId: currentThemeId, themeData: currentThemeData });
        }
    });

    return () => {
        unsubscribeId();
        unsubscribeData();
    };
};

// ========================================
// MAINTENANCE MODE FUNCTIONS (replacing localStorage)
// ========================================

/**
 * Save maintenance mode status
 * @param {boolean} enabled - Maintenance mode enabled/disabled
 * @returns {Promise<void>}
 */
export const saveMaintenanceMode = async (enabled) => {
    return saveContent('maintenance_mode', { enabled });
};

/**
 * Get maintenance mode status
 * @returns {Promise<boolean>} Maintenance mode status
 */
export const getMaintenanceMode = async () => {
    const data = await getContent('maintenance_mode');
    return data?.enabled || false;
};

/**
 * Subscribe to maintenance mode changes
 * @param {function} callback - Callback function receives boolean
 * @returns {function} Unsubscribe function
 */
export const subscribeToMaintenanceMode = (callback) => {
    return subscribeToContent('maintenance_mode', (data) => {
        callback(data?.enabled || false);
    });
};
