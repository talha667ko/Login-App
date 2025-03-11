// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-8wJHbo4yNiXkQCbEgCuHAGP_1RcWGvc",
  authDomain: "firelogin-33b72.firebaseapp.com",
  projectId: "firelogin-33b72",
  storageBucket: "firelogin-33b72.firebasestorage.app",
  messagingSenderId: "424036821752",
  appId: "1:424036821752:web:ee8dddfa17c0b36d46690d"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);