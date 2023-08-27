// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyC8pi9gfdLWkPiiXHfdPT-6mOnVo6AkkhU",
  authDomain: "netflix-clone-a3b0d.firebaseapp.com",
  projectId: "netflix-clone-a3b0d",
  storageBucket: "netflix-clone-a3b0d.appspot.com",
  messagingSenderId: "407769635283",
  appId: "1:407769635283:web:8323aec043cd98d818f726",
  measurementId: "G-QN7B2B7C00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app);