// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyG9FN8z6XNEXaNIzyO_iPdc8IZUCDENw",
  authDomain: "alpha-4d34a.firebaseapp.com",
  projectId: "alpha-4d34a",
  storageBucket: "alpha-4d34a.firebasestorage.app",
  messagingSenderId: "375125986516",
  appId: "1:375125986516:web:0c9f70b6ede9c1f0b9bf41",
  measurementId: "G-BL31D31DZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);