// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBteMf1mOsrCVf5fKBuKSV5b6LBRAV3teE",
  authDomain: "next-hangxachtay.firebaseapp.com",
  projectId: "next-hangxachtay",
  storageBucket: "next-hangxachtay.firebasestorage.app",
  messagingSenderId: "934681616555",
  appId: "1:934681616555:web:f3dd2b0218003adcc6d7ee",
  measurementId: "G-TFQYY8WB59",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// const analytics = getAnalytics(app);
