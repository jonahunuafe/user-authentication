// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAevo46dKD0JV8Z8Aj2CuB7FPY2dQDBro",
  authDomain: "user-authentication-f3e9c.firebaseapp.com",
  projectId: "user-authentication-f3e9c",
  storageBucket: "user-authentication-f3e9c.appspot.com",
  messagingSenderId: "457790891996",
  appId: "1:457790891996:web:902408a7437a53bab79119"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };