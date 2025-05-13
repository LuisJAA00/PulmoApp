// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6lp6_dphxutsqJOAbB5okmSDmY0Umegs",
  authDomain: "auth3-1b808.firebaseapp.com",
  projectId: "auth3-1b808",
  storageBucket: "auth3-1b808.firebasestorage.app",
  messagingSenderId: "105055264859",
  appId: "1:105055264859:web:28bdaa480e6153e50e1f7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
