// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdtM_aaqvTdeoObuDJZ7e4wlQmQqhxPBo",
  authDomain: "matchproject-bb371.firebaseapp.com",
  projectId: "matchproject-bb371",
  storageBucket: "matchproject-bb371.firebasestorage.app",
  messagingSenderId: "951506177835",
  appId: "1:951506177835:web:3bdd4ba37e1d87e10dff6e",
  measurementId: "G-FC777GBLYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);