// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgNj8vd3xgrC0wxlAHUemSwi3wD_9nw4M",
  authDomain: "kaunsa-music.firebaseapp.com",
  projectId: "kaunsa-music",
  storageBucket: "kaunsa-music.appspot.com",
  messagingSenderId: "807508237042",
  appId: "1:807508237042:web:5ba67b5c6f818338f54e6b",
  measurementId: "G-6DW2Z9SR6X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
