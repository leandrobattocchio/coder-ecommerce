// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvnl6C5UnLFHXa1-fTGaiRyemJUPNBwCE",
  authDomain: "ecommerce-videogames-2327e.firebaseapp.com",
  projectId: "ecommerce-videogames-2327e",
  storageBucket: "ecommerce-videogames-2327e.appspot.com",
  messagingSenderId: "1029202514911",
  appId: "1:1029202514911:web:bd38e21296a378fc7fea6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)