// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJXyvTSlON3AfS6YYTZPSYbVbuG2vHCHc",
    authDomain: "house-market-4a171.firebaseapp.com",
    projectId: "house-market-4a171",
    storageBucket: "house-market-4a171.appspot.com",
    messagingSenderId: "510649589270",
    appId: "1:510649589270:web:e5aae8f7287d6993479f37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
