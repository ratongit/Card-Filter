// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1NSeL3SAYCWXKsl5m3x1knHK5kJ2mIRI",
  authDomain: "next-proejct.firebaseapp.com",
  projectId: "next-proejct",
  storageBucket: "next-proejct.appspot.com",
  messagingSenderId: "329196364916",
  appId: "1:329196364916:web:cff6651f2f294643ee1d21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;