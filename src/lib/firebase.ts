import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCewChPxtVTK95vplbGbwG8zN-xRZd4orM",
  authDomain: "safeher-6ccd5.firebaseapp.com",
  projectId: "safeher-6ccd5",
  storageBucket: "safeher-6ccd5.firebasestorage.app",
  messagingSenderId: "888605773317",
  appId: "1:888605773317:web:8afefd6a539e656f6e166c",
  measurementId: "G-5T5V324DBS",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;
