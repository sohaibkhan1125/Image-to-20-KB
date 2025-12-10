// Script to CREATE a new JSONBin and initialize it with data
// This will create a new bin since the provided Bin ID doesn't exist

const JSONBIN_CONFIG = {
    API_KEY: '$2a$10$/pZdORZ7HPLYVN2/3S1C0OPUbQ3l0m37u58VksfZHl15mfey4cGGa',
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

async function createNewBin() {
    console.log('🚀 Creating new JSONBin...\n');

    try {
        const response = await fetch(
            `${JSONBIN_CONFIG.BASE_URL}/${JSONBIN_CONFIG.API_VERSION}/b`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': JSONBIN_CONFIG.API_KEY,
                    'X-Bin-Name': 'website-content-management',
                    'X-Bin-Private': 'false'
                },
                body: JSON.stringify(defaultContent)
            }
        );

        console.log(`Status: ${response.status} ${response.statusText}\n`);

        if (response.ok) {
            const result = await response.json();
            console.log('✅ Successfully created new JSONBin!\n');
            console.log('📋 IMPORTANT - Save this Bin ID:');
            console.log('   Bin ID: ' + result.metadata.id);
            console.log('\n📦 Initial data structure saved:');
            console.log(JSON.stringify(defaultContent, null, 2));
            console.log('\n🔧 Next steps:');
            console.log('   1. Copy the Bin ID above');
            console.log('   2. Update src/services/jsonbinService.js');
            console.log('   3. Replace BIN_ID with the new ID');
            console.log('   4. Restart your React app');

            return result;
        } else {
            const errorText = await response.text();
            console.log(`❌ Failed to create bin: ${errorText}`);
            throw new Error(errorText);
        }
    } catch (error) {
        console.error('❌ Error creating bin:', error.message);
        throw error;
    }
}

// Run creation
createNewBin()
    .then(() => {
        console.log('\n✨ Bin creation complete!');
    })
    .catch((error) => {
        console.error('\n💥 Bin creation failed:', error.message);
    });
