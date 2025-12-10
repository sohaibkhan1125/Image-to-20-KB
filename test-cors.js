// Alternative solution: Add CORS headers to requests
// Since JSONBin bins created via API are private by default,
// we need to ensure the bin allows public read access

const JSONBIN_CONFIG = {
    API_KEY: '$2a$10$/pZdORZ7HPLYVN2/3S1C0OPUbQ3l0m37u58VksfZHl15mfey4cGGa',
    BIN_ID: '69340264d0ea881f40167b5e',
    API_VERSION: 'v3',
    BASE_URL: 'https://api.jsonbin.io'
};

async function testWithAccessKey() {
    console.log('🔍 Testing JSONBin access...\n');

    try {
        // Try reading with the master key
        const response = await fetch(
            `${JSONBIN_CONFIG.BASE_URL}/${JSONBIN_CONFIG.API_VERSION}/b/${JSONBIN_CONFIG.BIN_ID}/latest`,
            {
                method: 'GET',
                headers: {
                    'X-Master-Key': JSONBIN_CONFIG.API_KEY,
                    'X-Access-Key': JSONBIN_CONFIG.API_KEY // Try with access key too
                }
            }
        );

        console.log('Response status:', response.status);
        console.log('Response headers:');
        response.headers.forEach((value, key) => {
            console.log(`  ${key}: ${value}`);
        });

        if (response.ok) {
            const data = await response.json();
            console.log('\n✅ Successfully fetched data!');
            console.log('📦 Data:', JSON.stringify(data.record, null, 2));

            console.log('\n📋 CORS Headers Present:');
            console.log('  Access-Control-Allow-Origin:', response.headers.get('access-control-allow-origin') || 'NOT SET');
            console.log('  Access-Control-Allow-Methods:', response.headers.get('access-control-allow-methods') || 'NOT SET');
        } else {
            const errorText = await response.text();
            console.log('\n❌ Error:', errorText);
        }
    } catch (error) {
        console.error('❌ Fetch error:', error.message);
    }
}

testWithAccessKey();
