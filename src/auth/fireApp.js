import * as firebase from "firebase/app";
// import "firebase/analytics";
import "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFG-svLIAN7pCGQ1_cX9ubTwiVi5To2IU",
  authDomain: "blue-tracker-b81ce.firebaseapp.com",
  projectId: "blue-tracker-b81ce",
  storageBucket: "blue-tracker-b81ce.appspot.com",
  messagingSenderId: "962814266418",
  appId: "1:962814266418:web:27fe543b29d5591c46802b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
