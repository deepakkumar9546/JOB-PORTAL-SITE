// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC32Q5B9xjMiW6ysIL-R4JmQP8mzBXf2Lw",
  authDomain: "mern-job-portal-7aafe.firebaseapp.com",
  projectId: "mern-job-portal-7aafe",
  storageBucket: "mern-job-portal-7aafe.appspot.com",
  messagingSenderId: "934603963086",
  appId: "1:934603963086:web:9bd722019b0089cdef6e9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;