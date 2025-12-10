import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqZ6gDhXqyit16LS_ncobgn2Xhy_OljaE",
  authDomain: "image-compressor-e9a22.firebaseapp.com",
  projectId: "image-compressor-e9a22",
  storageBucket: "image-compressor-e9a22.firebasestorage.app",
  messagingSenderId: "742666484787",
  appId: "1:742666484787:web:a3706f5df06d369b47f746"
};

// Initialize Firebase with error handling
let app, auth, db;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
} catch (error) {
  console.error('Firebase initialization error:', error);
  app = null;
  auth = null;
  db = null;
}

export { auth, db };
export default app;

