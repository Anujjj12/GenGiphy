// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "gengiphy.firebaseapp.com",
  projectId: "gengiphy",
  storageBucket: "gengiphy.firebasestorage.app",
  messagingSenderId: "307508982924",
  appId: "1:307508982924:web:09ea0bf25d2b11c23fb7a9",
  measurementId: "G-1R5F86B9RD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);