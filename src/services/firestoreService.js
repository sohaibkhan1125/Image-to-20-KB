// ========================================
// ⚠️ DEPRECATED - DO NOT USE
// ========================================
// This service has been replaced by jsonbinService.js
// All content management now uses JSONBin.io instead of Firebase Firestore
// This file is kept for reference only
// ========================================

import { db } from '../firebase';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';

// Collection and document names
const SITE_CONTENT_COLLECTION = 'siteContent';
const HERO_SECTION_DOC = 'heroSection';
const HOME_PAGE_CONTENT_DOC = 'homePageContent';
const BRANDING_DOC = 'branding';
const FOOTER_LINKS_DOC = 'footerLinks';
const GENERAL_SETTINGS_DOC = 'generalSettings';

/**
 * Generic function to save content to Firestore
 * @param {string} docId - Document ID
 * @param {object} data - Data to save
 * @returns {Promise<void>}
 */
export const saveContent = async (docId, data) => {
    try {
        if (!db) {
            throw new Error('Firestore is not initialized');
        }
        const docRef = doc(db, SITE_CONTENT_COLLECTION, docId);
        await setDoc(docRef, { data, updatedAt: new Date().toISOString() }, { merge: true });
    } catch (error) {
        console.error(`Error saving content to ${docId}:`, error);
        throw error;
    }
};

/**
 * Generic function to get content from Firestore
 * @param {string} docId - Document ID
 * @returns {Promise<object|null>}
 */
export const getContent = async (docId) => {
    try {
        if (!db) {
            console.error('❌ Firestore is not initialized. Please check your Firebase configuration.');
            throw new Error('Firestore is not initialized');
        }
        const docRef = doc(db, SITE_CONTENT_COLLECTION, docId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data().data;
        }
        return null;
    } catch (error) {
        if (error.code === 'unavailable' || error.message.includes('offline')) {
            console.error(`❌ Firestore Error: Database not set up or offline.`);
            console.error(`📋 Solution: Create Firestore database in Firebase Console.`);
            console.error(`📖 See FIRESTORE_FIX.md for detailed instructions.`);
        } else {
            console.error(`Error getting content from ${docId}:`, error);
        }
        throw error;
    }
};

/**
 * Generic function to subscribe to content changes in real-time
 * @param {string} docId - Document ID
 * @param {function} callback - Callback function to handle updates
 * @returns {function} Unsubscribe function
 */
export const subscribeToContent = (docId, callback) => {
    try {
        if (!db) {
            console.error('Firestore is not initialized');
            return () => { };
        }
        const docRef = doc(db, SITE_CONTENT_COLLECTION, docId);

        return onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
                callback(docSnap.data().data);
            } else {
                callback(null);
            }
        }, (error) => {
            console.error(`Error subscribing to ${docId}:`, error);
            callback(null);
        });
    } catch (error) {
        console.error(`Error setting up subscription for ${docId}:`, error);
        return () => { };
    }
};

// Hero Section functions
export const saveHeroSection = async (data) => {
    return saveContent(HERO_SECTION_DOC, data);
};

export const getHeroSection = async () => {
    return getContent(HERO_SECTION_DOC);
};

export const subscribeToHeroSection = (callback) => {
    return subscribeToContent(HERO_SECTION_DOC, callback);
};

// Home Page Content functions
export const saveHomePageContent = async (content) => {
    return saveContent(HOME_PAGE_CONTENT_DOC, { content });
};

export const getHomePageContent = async () => {
    const data = await getContent(HOME_PAGE_CONTENT_DOC);
    return data?.content || '';
};

export const subscribeToHomePageContent = (callback) => {
    return subscribeToContent(HOME_PAGE_CONTENT_DOC, (data) => {
        callback(data?.content || '');
    });
};

// Branding functions
export const saveBranding = async (data) => {
    return saveContent(BRANDING_DOC, data);
};

export const getBranding = async () => {
    return getContent(BRANDING_DOC);
};

export const subscribeToBranding = (callback) => {
    return subscribeToContent(BRANDING_DOC, callback);
};

// Footer Links functions
export const saveFooterLinks = async (links) => {
    return saveContent(FOOTER_LINKS_DOC, { links });
};

export const getFooterLinks = async () => {
    const data = await getContent(FOOTER_LINKS_DOC);
    return data?.links || [];
};

export const subscribeToFooterLinks = (callback) => {
    return subscribeToContent(FOOTER_LINKS_DOC, (data) => {
        callback(data?.links || []);
    });
};

// General Settings functions
export const saveGeneralSettings = async (settings) => {
    return saveContent(GENERAL_SETTINGS_DOC, settings);
};

export const getGeneralSettings = async () => {
    return getContent(GENERAL_SETTINGS_DOC);
};

export const subscribeToGeneralSettings = (callback) => {
    return subscribeToContent(GENERAL_SETTINGS_DOC, callback);
};
