// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMF-53KC6EcvorgnC-PkUaKlaSN6noEpA",
  authDomain: "portfolio-37c91.firebaseapp.com",
  projectId: "portfolio-37c91",
  storageBucket: "portfolio-37c91.appspot.com",
  messagingSenderId: "924783340248",
  appId: "1:924783340248:web:218cd0382bc1f7bcca05ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);