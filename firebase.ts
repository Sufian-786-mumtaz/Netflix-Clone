// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoM9Oi3iiDJY4q8A8k1a7y89v9CXEm2lI",
  authDomain: "netflix-clone-15f80.firebaseapp.com",
  projectId: "netflix-clone-15f80",
  storageBucket: "netflix-clone-15f80.appspot.com",
  messagingSenderId: "730701441277",
  appId: "1:730701441277:web:bc72b9510ab4ab1bb1b694",
  measurementId: "G-LJ64RXW5QT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()
export {auth, db}
export default app
