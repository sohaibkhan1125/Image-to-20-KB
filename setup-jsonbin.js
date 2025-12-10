// Script to create JSONBin and save the Bin ID to a file
const fs = require('fs');
const path = require('path');

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

async function createAndConfigureBin() {
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

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to create bin: ${errorText}`);
        }

        const result = await response.json();
        const newBinId = result.metadata.id;

        console.log('✅ Successfully created new JSONBin!');
        console.log('📋 Bin ID:', newBinId);
        console.log('\n📦 Initial data structure saved successfully\n');

        // Save Bin ID to a file
        const binIdPath = path.join(__dirname, 'bin-id.txt');
        fs.writeFileSync(binIdPath, newBinId);
        console.log('💾 Bin ID saved to:', binIdPath);

        // Update jsonbinService.js
        const servicePath = path.join(__dirname, 'src', 'services', 'jsonbinService.js');
        let serviceContent = fs.readFileSync(servicePath, 'utf8');

        // Replace the BIN_ID
        serviceContent = serviceContent.replace(
            /BIN_ID:\s*'[^']*'/,
            `BIN_ID: '${newBinId}'`
        );

        fs.writeFileSync(servicePath, serviceContent);
        console.log('✅ Updated jsonbinService.js with new Bin ID\n');

        console.log('🎉 Configuration complete!');
        console.log('📝 Summary:');
        console.log('   - New Bin ID:', newBinId);
        console.log('   - Service file updated: src/services/jsonbinService.js');
        console.log('   - Your React app should auto-reload');
        console.log('\n✨ You can now use the admin panel at /admin');

        return newBinId;
    } catch (error) {
        console.error('❌ Error:', error.message);
        throw error;
    }
}

// Run the setup
createAndConfigureBin()
    .then(() => {
        console.log('\n🚀 Setup complete! Your app is ready to use.');
    })
    .catch((error) => {
        console.error('\n💥 Setup failed:', error.message);
        process.exit(1);
    });
