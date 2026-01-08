import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonical, ogType = 'website' }) => {
    const siteName = 'Image Compressor';
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const baseUrl = 'https://imageto20kb.com'; // User can update this
    const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={fullCanonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />

            {/* Indexing Tags */}
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
        </Helmet>
    );
};

export default SEO;
