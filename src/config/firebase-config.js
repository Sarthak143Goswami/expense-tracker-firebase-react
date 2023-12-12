// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCcQ4FjbLImswOF6KSYVY3MAbJHBlarA0",
  authDomain: "expense-tracker-923d5.firebaseapp.com",
  projectId: "expense-tracker-923d5",
  storageBucket: "expense-tracker-923d5.appspot.com",
  messagingSenderId: "266566841659",
  appId: "1:266566841659:web:a7c041426e911505db731e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db =getFirestore(app);

//firebase login
//firebase init 
//firebase deploy