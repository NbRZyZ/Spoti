// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBsSw0LjV8a2ZthvtwIiwaxU4gWGzQDSI",
  authDomain: "project-mock-1a666.firebaseapp.com",
  projectId: "project-mock-1a666",
  storageBucket: "project-mock-1a666.appspot.com",
  messagingSenderId: "717836969860",
  appId: "1:717836969860:web:b9704cd7adf8629960dfd1",
  measurementId: "G-23JLVJ13P6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);