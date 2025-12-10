// Test script to verify JSONBin connection and test operations
const JSONBIN_CONFIG = {
    API_KEY: '$2a$10$/pZdORZ7HPLYVN2/3S1C0OPUbQ3l0m37u58VksfZHl15mfey4cGGa',
    BIN_ID: '6933c41203998b11ea8da27c',
    API_VERSION: 'v3',
    BASE_URL: 'https://api.jsonbin.io'
};

async function testJSONBinConnection() {
    console.log('🔍 Testing JSONBin connection...\n');

    // Test 1: Try to read existing data
    console.log('📖 Test 1: Reading existing data from JSONBin...');
    try {
        const readResponse = await fetch(
            `${JSONBIN_CONFIG.BASE_URL}/${JSONBIN_CONFIG.API_VERSION}/b/${JSONBIN_CONFIG.BIN_ID}/latest`,
            {
                method: 'GET',
                headers: {
                    'X-Master-Key': JSONBIN_CONFIG.API_KEY
                }
            }
        );

        console.log(`   Status: ${readResponse.status} ${readResponse.statusText}`);

        if (readResponse.ok) {
            const data = await readResponse.json();
            console.log('   ✅ Successfully read data from JSONBin!');
            console.log('   📦 Current data:', JSON.stringify(data.record, null, 2));
        } else {
            const errorText = await readResponse.text();
            console.log(`   ❌ Failed to read: ${errorText}`);
        }
    } catch (error) {
        console.log(`   ❌ Error: ${error.message}`);
    }

    console.log('\n' + '='.repeat(60) + '\n');

    // Test 2: Try to update data
    console.log('✏️  Test 2: Updating data in JSONBin...');
    const testData = {
        heroSection: {
            heading: 'Test Heading from Migration Script',
            description: 'This is a test to verify JSONBin integration works correctly.'
        },
        homePageContent: {
            content: '<p>Welcome to our image compression tool!</p>'
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

    try {
        const updateResponse = await fetch(
            `${JSONBIN_CONFIG.BASE_URL}/${JSONBIN_CONFIG.API_VERSION}/b/${JSONBIN_CONFIG.BIN_ID}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': JSONBIN_CONFIG.API_KEY,
                    'X-Bin-Meta': 'false'
                },
                body: JSON.stringify(testData)
            }
        );

        console.log(`   Status: ${updateResponse.status} ${updateResponse.statusText}`);

        if (updateResponse.ok) {
            const result = await updateResponse.json();
            console.log('   ✅ Successfully updated data in JSONBin!');
            console.log('   📦 Updated data structure saved');
        } else {
            const errorText = await updateResponse.text();
            console.log(`   ❌ Failed to update: ${errorText}`);
        }
    } catch (error) {
        console.log(`   ❌ Error: ${error.message}`);
    }

    console.log('\n' + '='.repeat(60) + '\n');
    console.log('🎯 Test complete!');
    console.log('📋 Summary:');
    console.log('   - API Key: ' + JSONBIN_CONFIG.API_KEY.substring(0, 20) + '...');
    console.log('   - Bin ID: ' + JSONBIN_CONFIG.BIN_ID);
    console.log('   - API Version: ' + JSONBIN_CONFIG.API_VERSION);
}

// Run tests
testJSONBinConnection();
