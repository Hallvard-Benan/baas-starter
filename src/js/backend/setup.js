// do set up and initialisation
// use import.meta.env.VARIABLE_NAME to access env variables (Vite-specific)
// someValue = import.meta.env.VITE_SOME_VALUE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdi7D8oGIdAxc97PuTClqsb6r3tb0owYA",
  authDomain: "testproject-hb.firebaseapp.com",
  projectId: "testproject-hb",
  storageBucket: "testproject-hb.appspot.com",
  messagingSenderId: "413143269341",
  appId: "1:413143269341:web:51b1eb1b7efb5cb4ee8034",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
