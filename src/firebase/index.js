// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: window.env.API_KEY,
  authDomain: window.env.AUTH_DOMAIN,
  projectId: window.env.PROJECT_ID,
  storageBucket: window.env.STORAGE_BUCKET,
  messagingSenderId: window.env.MESSAGE_SENDER_ID,
  appId: window.env.APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)