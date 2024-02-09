import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,signOut} from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDzLruaWu4qcjPqQLTHO2RN6u6WYxZxsoc",
  authDomain: "web40-514cc.firebaseapp.com",
  projectId: "web40-514cc",
  storageBucket: "web40-514cc.appspot.com",
  messagingSenderId: "383414588228",
  appId: "1:383414588228:web:d827962205ef04c13b7d11",
  measurementId: "G-1RY8X1L86C"
};
const app = initializeApp(firebaseConfig);

// Initialize Firebase

var auth = getAuth(app);

export { auth, signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut};