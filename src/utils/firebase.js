// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_FIREBASE_API_KEY}`,
  authDomain: "kaunsa-music.firebaseapp.com",
  projectId: "kaunsa-music",
  storageBucket: "kaunsa-music.appspot.com",
  messagingSenderId: "807508237042",
  appId: "1:807508237042:web:5ba67b5c6f818338f54e6b",
  measurementId: "G-6DW2Z9SR6X",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
