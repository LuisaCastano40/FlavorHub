// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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