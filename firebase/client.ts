import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCMcC7Q9xhJYpv-fnbojq77pda3Pk1LALo",
    authDomain: "prepwise-c5214.firebaseapp.com",
    projectId: "prepwise-c5214",
    storageBucket: "prepwise-c5214.firebasestorage.app",
    messagingSenderId: "993506168630",
    appId: "1:993506168630:web:8148233c771d5093302d97",
    measurementId: "G-3FM4RGSYYK"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);