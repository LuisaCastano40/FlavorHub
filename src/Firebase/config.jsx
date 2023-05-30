import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth= getAuth (FirebaseApp);
export const FirebaseDB = getFirestore (FirebaseApp)