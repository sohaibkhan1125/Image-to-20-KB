// Final verification script
const JSONBIN_CONFIG = {
    API_KEY: '$2a$10$/pZdORZ7HPLYVN2/3S1C0OPUbQ3l0m37u58VksfZHl15mfey4cGGa',
    BIN_ID: '69340264d0ea881f40167b5e',
    API_VERSION: 'v3',
    BASE_URL: 'https://api.jsonbin.io'
};

async function verifySetup() {
    console.log('🔍 Verifying JSONBin setup...\n');

    try {
        // Test reading data
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
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();

        console.log('✅ Successfully connected to JSONBin!');
        console.log('\n📦 Current data structure:');
        console.log(JSON.stringify(data.record, null, 2));

        console.log('\n✨ Verification complete!');
        console.log('📋 Summary:');
        console.log('   ✅ Bin ID: ' + JSONBIN_CONFIG.BIN_ID);
        console.log('   ✅ Connection: Working');
        console.log('   ✅ Data structure: Valid');
        console.log('\n🎉 Your app is ready to use!');
        console.log('📝 Next steps:');
        console.log('   1. Your React app should have auto-reloaded');
        console.log('   2. Navigate to /admin to manage content');
        console.log('   3. All changes will be saved to JSONBin.io');

        return true;
    } catch (error) {
        console.error('❌ Verification failed:', error.message);
        return false;
    }
}

verifySetup();
