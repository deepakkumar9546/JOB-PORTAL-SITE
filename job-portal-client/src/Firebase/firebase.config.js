// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ6ePOnKaG3iKhv5pfMuM56PNv37BJd5A",
  authDomain: "mern-job-portal-cf71d.firebaseapp.com",
  projectId: "mern-job-portal-cf71d",
  storageBucket: "mern-job-portal-cf71d.appspot.com",
  messagingSenderId: "942484068181",
  appId: "1:942484068181:web:57aae1a5d1c6d88b76c1dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;