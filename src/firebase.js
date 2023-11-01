// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByTvdpBeYmhXrtMGbnmEAZbuT3M6hkTBM",
  authDomain: "realtor-clone-cd67b.firebaseapp.com",
  projectId: "realtor-clone-cd67b",
  storageBucket: "realtor-clone-cd67b.appspot.com",
  messagingSenderId: "554287257646",
  appId: "1:554287257646:web:a76b6b14787ba5d542a7bf",
  measurementId: "G-7HZYQXZR7L"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
export const db = getFirestore()
