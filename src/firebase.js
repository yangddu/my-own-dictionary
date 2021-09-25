// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE-5vKGAOp9XgHZcqA-9_heX7XS86YXB0",
  authDomain: "sparta-my-dictionary.firebaseapp.com",
  projectId: "sparta-my-dictionary",
  storageBucket: "sparta-my-dictionary.appspot.com",
  messagingSenderId: "1068552544266",
  appId: "1:1068552544266:web:769100f71c24a790a47ff3",
  measurementId: "G-ZC0603F7X4"
};


initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export const db = getFirestore();