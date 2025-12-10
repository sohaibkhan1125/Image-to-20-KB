# Firestore Security Rules Setup

## Important: Set Up Security Rules Before Testing

Before you can test the Firestore integration, you need to configure security rules in the Firebase Console.

## Steps to Configure:

1. **Go to Firebase Console**
   - Visit: https://console.firebase.google.com/
   - Select your project: `image-compressor-e9a22`

2. **Navigate to Firestore Database**
   - Click on **Firestore Database** in the left sidebar
   - Click on the **Rules** tab

3. **Add Security Rules**
   
   Replace the existing rules with:

   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       // Allow public read access to site content
       match /siteContent/{document=**} {
         allow read: if true;
         // Only authenticated users can write
         allow write: if request.auth != null;
       }
     }
   }
   ```

4. **Publish Rules**
   - Click the **Publish** button
   - Wait for confirmation message

## What These Rules Do:

- **Read Access**: Anyone can read site content (public website needs this)
- **Write Access**: Only authenticated admin users can modify content
- **Collection**: Rules apply to the `siteContent` collection and all its documents

## Testing Without Rules (Development Only):

If you want to test immediately without authentication, you can temporarily use these permissive rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /siteContent/{document=**} {
      allow read, write: if true;
    }
  }
}
```

> ⚠️ **WARNING**: These permissive rules allow anyone to read and write. Only use for development/testing. Replace with secure rules before production deployment.

## Verification:

After setting up rules, test by:
1. Opening the admin panel
2. Adding content in any section
3. Checking Firebase Console → Firestore Database to see if data appears

If you see data in Firestore, the rules are working correctly!
