import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx-5WcSbk1j5JuLjCIVjqs-iTxbW4P6bw",
  authDomain: "flavor-hub.firebaseapp.com",
  projectId: "flavor-hub",
  storageBucket: "flavor-hub.appspot.com",
  messagingSenderId: "616138592202",
  appId: "1:616138592202:web:c56d86d8ab2f65d0c60933"
};

// Initialize Firebase

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth= getAuth (FirebaseApp);
export const FirebaseDB = getFirestore (FirebaseApp)