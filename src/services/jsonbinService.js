// ========================================
// JSONBin.io Service - Content Management
// ========================================
// This service replaces Firebase Firestore for content management
// All website content is stored in a single JSONBin

// ========================================
// CONFIGURATION
// ========================================
const JSONBIN_CONFIG = {
    API_KEY: '$2a$10$/pZdORZ7HPLYVN2/3S1C0OPUbQ3l0m37u58VksfZHl15mfey4cGGa',
    BIN_ID: '69340264d0ea881f40167b5e',
    API_VERSION: 'v3',
    BASE_URL: 'https://api.jsonbin.io'
};

// ========================================
// CORE FUNCTIONS
// ========================================

/**
 * Fetch all content from JSONBin
 * @returns {Promise<object>} All content data
 */
export const getAllContent = async () => {
    try {
        const response = await fetch(
            `${JSONBIN_CONFIG.BASE_URL}/${JSONBIN_CONFIG.API_VERSION}/b/${JSONBIN_CONFIG.BIN_ID}/latest`,
            {
                method: 'GET',
                headers: {
                    'X-Master-Key': JSONBIN_CONFIG.API_KEY
                }
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data.record || {};
    } catch (error) {
        console.error('Error fetching content from JSONBin:', error);
        throw error;
    }
};

/**
 * Update all content in JSONBin
 * @param {object} content - Complete content object
 * @returns {Promise<void>}
 */
export const updateAllContent = async (content) => {
    try {
        const response = await fetch(
            `${JSONBIN_CONFIG.BASE_URL}/${JSONBIN_CONFIG.API_VERSION}/b/${JSONBIN_CONFIG.BIN_ID}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': JSONBIN_CONFIG.API_KEY,
                    'X-Bin-Meta': 'false'
                },
                body: JSON.stringify(content)
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error updating content in JSONBin:', error);
        throw error;
    }
};

/**
 * Get specific content section from JSONBin
 * @param {string} key - Content section key
 * @returns {Promise<any>} Content data for the specified key
 */
export const getContent = async (key) => {
    try {
        const allContent = await getAllContent();
        return allContent[key] || null;
    } catch (error) {
        console.error(`Error getting content for ${key}:`, error);
        throw error;
    }
};

/**
 * Save specific content section to JSONBin
 * @param {string} key - Content section key
 * @param {any} data - Data to save
 * @returns {Promise<void>}
 */
export const saveContent = async (key, data) => {
    try {
        // First, get all existing content
        const allContent = await getAllContent();

        // Update the specific section
        allContent[key] = data;

        // Save back to JSONBin
        await updateAllContent(allContent);
    } catch (error) {
        console.error(`Error saving content for ${key}:`, error);
        throw error;
    }
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
    return saveContent('heroSection', data);
};

/**
 * Get hero section data
 * @returns {Promise<object|null>} Hero section data
 */
export const getHeroSection = async () => {
    return getContent('heroSection');
};

/**
 * Subscribe to hero section changes (polling-based)
 * @param {function} callback - Callback function
 * @returns {function} Unsubscribe function
 */
export const subscribeToHeroSection = (callback) => {
    // Since JSONBin doesn't support real-time updates,
    // we'll implement polling every 30 seconds
    const intervalId = setInterval(async () => {
        try {
            const data = await getHeroSection();
            callback(data);
        } catch (error) {
            console.error('Error in hero section subscription:', error);
        }
    }, 30000); // Poll every 30 seconds

    // Initial fetch
    getHeroSection().then(callback).catch(console.error);

    // Return unsubscribe function
    return () => clearInterval(intervalId);
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
    return saveContent('homePageContent', { content });
};

/**
 * Get home page content
 * @returns {Promise<string>} HTML content
 */
export const getHomePageContent = async () => {
    const data = await getContent('homePageContent');
    return data?.content || '';
};

/**
 * Subscribe to home page content changes
 * @param {function} callback - Callback function
 * @returns {function} Unsubscribe function
 */
export const subscribeToHomePageContent = (callback) => {
    const intervalId = setInterval(async () => {
        try {
            const content = await getHomePageContent();
            callback(content);
        } catch (error) {
            console.error('Error in home page content subscription:', error);
        }
    }, 30000);

    // Initial fetch
    getHomePageContent().then(callback).catch(console.error);

    return () => clearInterval(intervalId);
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
    const intervalId = setInterval(async () => {
        try {
            const data = await getBranding();
            callback(data);
        } catch (error) {
            console.error('Error in branding subscription:', error);
        }
    }, 30000);

    // Initial fetch
    getBranding().then(callback).catch(console.error);

    return () => clearInterval(intervalId);
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
    return saveContent('footerLinks', { links });
};

/**
 * Get footer links
 * @returns {Promise<array>} Array of social media links
 */
export const getFooterLinks = async () => {
    const data = await getContent('footerLinks');
    return data?.links || [];
};

/**
 * Subscribe to footer links changes
 * @param {function} callback - Callback function
 * @returns {function} Unsubscribe function
 */
export const subscribeToFooterLinks = (callback) => {
    const intervalId = setInterval(async () => {
        try {
            const links = await getFooterLinks();
            callback(links);
        } catch (error) {
            console.error('Error in footer links subscription:', error);
        }
    }, 30000);

    // Initial fetch
    getFooterLinks().then(callback).catch(console.error);

    return () => clearInterval(intervalId);
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
    return saveContent('generalSettings', settings);
};

/**
 * Get general settings
 * @returns {Promise<object|null>} Settings object
 */
export const getGeneralSettings = async () => {
    return getContent('generalSettings');
};

/**
 * Subscribe to general settings changes
 * @param {function} callback - Callback function
 * @returns {function} Unsubscribe function
 */
export const subscribeToGeneralSettings = (callback) => {
    const intervalId = setInterval(async () => {
        try {
            const settings = await getGeneralSettings();
            callback(settings);
        } catch (error) {
            console.error('Error in general settings subscription:', error);
        }
    }, 30000);

    // Initial fetch
    getGeneralSettings().then(callback).catch(console.error);

    return () => clearInterval(intervalId);
};

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Initialize JSONBin with default data structure if empty
 * @returns {Promise<void>}
 */
export const initializeJSONBin = async () => {
    try {
        const content = await getAllContent();

        // Check if content is empty or missing required keys
        const defaultContent = {
            heroSection: content.heroSection || { heading: '', description: '' },
            homePageContent: content.homePageContent || { content: '' },
            branding: content.branding || { siteTitle: 'Image Compress', logoUrl: '' },
            footerLinks: content.footerLinks || { links: [] },
            generalSettings: content.generalSettings || {
                siteName: 'Image Compressor',
                maxFileSize: 50,
                maintenanceMode: false
            }
        };

        // Only update if content was empty
        if (Object.keys(content).length === 0) {
            await updateAllContent(defaultContent);
            console.log('✅ JSONBin initialized with default content structure');
        }
    } catch (error) {
        console.error('Error initializing JSONBin:', error);
        throw error;
    }
};
