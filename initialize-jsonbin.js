// Quick test script to initialize JSONBin with default data
// Run this once to set up the initial data structure

const JSONBIN_CONFIG = {
    API_KEY: '$2a$10$/pZdORZ7HPLYVN2/3S1C0OPUbQ3l0m37u58VksfZHl15mfey4cGGa',
    BIN_ID: '6933c41203998b11ea8da27c',
    API_VERSION: 'v3',
    BASE_URL: 'https://api.jsonbin.io'
};

const defaultContent = {
    heroSection: {
        heading: 'Compress Images to Any Size',
        description: 'Reduce your image file sizes while maintaining quality. Upload any image and compress it to your exact target size in KB.'
    },
    homePageContent: {
        content: ''
    },
    branding: {
        siteTitle: 'Image Compress',
        logoUrl: ''
    },
    footerLinks: {
        links: []
    },
    generalSettings: {
        siteName: 'Image Compressor',
        maxFileSize: 50,
        maintenanceMode: false
    }
};

async function initializeJSONBin() {
    try {
        console.log('🚀 Initializing JSONBin with default data...');

        const response = await fetch(
            `${JSONBIN_CONFIG.BASE_URL}/${JSONBIN_CONFIG.API_VERSION}/b/${JSONBIN_CONFIG.BIN_ID}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': JSONBIN_CONFIG.API_KEY,
                    'X-Bin-Meta': 'false'
                },
                body: JSON.stringify(defaultContent)
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log('✅ JSONBin initialized successfully!');
        console.log('📦 Data structure:', JSON.stringify(defaultContent, null, 2));

        return result;
    } catch (error) {
        console.error('❌ Error initializing JSONBin:', error);
        throw error;
    }
}

// Run initialization
initializeJSONBin()
    .then(() => {
        console.log('\n✨ Initialization complete! Your JSONBin is ready to use.');
        console.log('🎯 Next steps:');
        console.log('   1. Start your React app: npm start');
        console.log('   2. Navigate to /admin to manage content');
        console.log('   3. All changes will be saved to JSONBin.io');
    })
    .catch((error) => {
        console.error('\n💥 Initialization failed:', error.message);
    });
