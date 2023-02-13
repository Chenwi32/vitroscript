// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvD9ABKyrHCe_nOuw2qCJtmCPDudOKIqw",
  authDomain: "vitroscript-23.firebaseapp.com",
  projectId: "vitroscript-23",
  storageBucket: "vitroscript-23.appspot.com",
  messagingSenderId: "379925221861",
  appId: "1:379925221861:web:bb339064c80a77b52bdf0c",
  measurementId: "G-QE47WS9XYT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initializing the authentication
const auth = getAuth(app);




export { auth };