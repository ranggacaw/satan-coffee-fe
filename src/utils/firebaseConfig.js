// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp0drMrRJNlPqWLnoEDoqP3sDdsGy2sc4",
  authDomain: "satan-coffee.firebaseapp.com",
  projectId: "satan-coffee",
  storageBucket: "satan-coffee.firebasestorage.app",
  messagingSenderId: "700252717031",
  appId: "1:700252717031:web:4727664683bb48f0948742",
  measurementId: "G-5TEZN2MJVJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth, db, storage}