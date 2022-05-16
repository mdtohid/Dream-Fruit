// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrvMGTlTcKLeKS04R9sPcA0pi-KJkyLmA",
  authDomain: "evn-local.firebaseapp.com",
  projectId: "evn-local",
  storageBucket: "evn-local.appspot.com",
  messagingSenderId: "1097978799408",
  appId: "1:1097978799408:web:22c58ff62242fa4c13d4f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;