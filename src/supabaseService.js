import { supabase } from "./supabaseClient";

export async function saveHomepageContent(slug, content) {
    const { data, error } = await supabase
        .from("website_content")
        .update({ content })
        .eq("slug", slug);

    if (error) {
        console.error("Supabase Save Error:", error);
        return { success: false, error };
    }

    return { success: true, data };
}

export async function fetchHomepageContent(slug) {
    const { data, error } = await supabase
        .from("website_content")
        .select("content")
        .eq("slug", slug)
        .single();

    if (error) {
        console.error("Supabase Fetch Error:", error);
        return null;
    }

    return data?.content || "";
}

// Additional functions for other content types
export async function saveHeroSection(data) {
    return saveHomepageContent('hero_section', JSON.stringify(data));
}

export async function getHeroSection() {
    const content = await fetchHomepageContent('hero_section');
    try {
        return content ? JSON.parse(content) : null;
    } catch {
        return null;
    }
}

export async function saveBranding(data) {
    return saveHomepageContent('branding', JSON.stringify(data));
}

export async function getBranding() {
    const content = await fetchHomepageContent('branding');
    try {
        return content ? JSON.parse(content) : null;
    } catch {
        return null;
    }
}

export async function saveFooterLinks(links) {
    return saveHomepageContent('footer_links', JSON.stringify({ links }));
}

export async function getFooterLinks() {
    const content = await fetchHomepageContent('footer_links');
    try {
        const data = content ? JSON.parse(content) : null;
        return data?.links || [];
    } catch {
        return [];
    }
}

export async function saveGeneralSettings(settings) {
    return saveHomepageContent('general_settings', JSON.stringify(settings));
}

export async function getGeneralSettings() {
    const content = await fetchHomepageContent('general_settings');
    try {
        return content ? JSON.parse(content) : null;
    } catch {
        return null;
    }
}

export async function saveSelectedTheme(themeId, themeData) {
    await saveHomepageContent('selected_theme', themeId);
    await saveHomepageContent('theme_data', JSON.stringify(themeData));
}

export async function getSelectedTheme() {
    const themeId = await fetchHomepageContent('selected_theme');
    const themeDataStr = await fetchHomepageContent('theme_data');
    try {
        const themeData = themeDataStr ? JSON.parse(themeDataStr) : null;
        return { themeId, themeData };
    } catch {
        return { themeId: null, themeData: null };
    }
}

// Simple polling-based subscriptions (no realtime WebSocket to avoid auth issues)
export const subscribeToHomePageContent = (callback) => {
    const intervalId = setInterval(async () => {
        const content = await fetchHomepageContent('homepage_text');
        callback(content);
    }, 5000); // Poll every 5 seconds

    // Initial fetch
    fetchHomepageContent('homepage_text').then(callback);

    return () => clearInterval(intervalId);
};

export const subscribeToHeroSection = (callback) => {
    const intervalId = setInterval(async () => {
        const data = await getHeroSection();
        callback(data);
    }, 5000);

    getHeroSection().then(callback);
    return () => clearInterval(intervalId);
};

export const subscribeToBranding = (callback) => {
    const intervalId = setInterval(async () => {
        const data = await getBranding();
        callback(data);
    }, 5000);

    getBranding().then(callback);
    return () => clearInterval(intervalId);
};

export const subscribeToFooterLinks = (callback) => {
    const intervalId = setInterval(async () => {
        const links = await getFooterLinks();
        callback(links);
    }, 5000);

    getFooterLinks().then(callback);
    return () => clearInterval(intervalId);
};

export const subscribeToGeneralSettings = (callback) => {
    const intervalId = setInterval(async () => {
        const settings = await getGeneralSettings();
        callback(settings);
    }, 5000);

    getGeneralSettings().then(callback);
    return () => clearInterval(intervalId);
};

export const subscribeToTheme = (callback) => {
    const intervalId = setInterval(async () => {
        const theme = await getSelectedTheme();
        callback(theme);
    }, 5000);

    getSelectedTheme().then(callback);
    return () => clearInterval(intervalId);
};

export const subscribeToMaintenanceMode = (callback) => {
    const intervalId = setInterval(async () => {
        const settings = await getGeneralSettings();
        callback(settings?.maintenanceMode || false);
    }, 5000);

    getGeneralSettings().then(data => callback(data?.maintenanceMode || false));
    return () => clearInterval(intervalId);
};

// Backward compatibility exports - these wrap the functions to match old API
export const saveHomePageContent = (content) => saveHomepageContent('homepage_text', content);
export const getHomePageContent = () => fetchHomepageContent('homepage_text');
