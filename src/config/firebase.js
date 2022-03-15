// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAkfN50WIZAZEG-5-TmkFigb8UJVpeXz0g",
    authDomain: "teacher-app-design.firebaseapp.com",
    projectId: "teacher-app-design",
    storageBucket: "teacher-app-design.appspot.com",
    messagingSenderId: "232788933122",
    appId: "1:232788933122:web:bce7da2fb6556bf257c51b",
    measurementId: "G-BDYYGE1PKX"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);