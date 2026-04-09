import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB27BvWgAtil7oOS5Z3fNqeqw41qLdyalU",
  authDomain: "exercise-tracker-ee724.firebaseapp.com",
  databaseURL: "https://exercise-tracker-ee724-default-rtdb.firebaseio.com",
  projectId: "exercise-tracker-ee724",
  storageBucket: "exercise-tracker-ee724.firebasestorage.app",
  messagingSenderId: "688508143601",
  appId: "1:688508143601:web:d70f0e3577fa936093e650",
  measurementId: "G-1JS50M5762"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { db, auth, analytics, collection, doc, setDoc, getDoc, serverTimestamp, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged };
