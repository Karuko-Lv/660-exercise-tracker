import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4x4f8Z7Z7Z7Z7Z7Z7Z7Z7Z7Z7Z7Z7Z7Z7",
  authDomain: "exercise-tracker-ee724.firebaseapp.com",
  projectId: "exercise-tracker-ee724",
  storageBucket: "exercise-tracker-ee724.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890abcdef"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, collection, doc, setDoc, getDoc, serverTimestamp, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged };
