// Script to make the JSONBin public to fix CORS errors
const JSONBIN_CONFIG = {
    API_KEY: '$2a$10$/pZdORZ7HPLYVN2/3S1C0OPUbQ3l0m37u58VksfZHl15mfey4cGGa',
    BIN_ID: '69340264d0ea881f40167b5e',
    API_VERSION: 'v3',
    BASE_URL: 'https://api.jsonbin.io'
};

async function makePublic() {
    console.log('🔓 Making JSONBin public to fix CORS errors...\n');

    try {
        // Update bin metadata to make it public
        const response = await fetch(
            `${JSONBIN_CONFIG.BASE_URL}/${JSONBIN_CONFIG.API_VERSION}/b/${JSONBIN_CONFIG.BIN_ID}/meta`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': JSONBIN_CONFIG.API_KEY
                },
                body: JSON.stringify({
                    private: false
                })
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            console.log('❌ Failed to update bin privacy:', errorText);
            throw new Error(errorText);
        }

        const result = await response.json();
        console.log('✅ Successfully made bin public!');
        console.log('📋 Bin is now accessible from any origin');
        console.log('\n🔄 Please refresh your browser to test the admin panel');

        return result;
    } catch (error) {
        console.error('❌ Error:', error.message);
        throw error;
    }
}

makePublic()
    .then(() => {
        console.log('\n✨ CORS issue should be fixed!');
        console.log('🎯 Next: Refresh http://localhost:3000/admin');
    })
    .catch((error) => {
        console.error('\n💥 Failed to make bin public:', error.message);
    });
