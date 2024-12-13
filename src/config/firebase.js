import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAWf8RhTXRY2PaQHJSZl3wPPjEYRb1fDrM",
  authDomain: "wavify-fba8c.firebaseapp.com",
  projectId: "wavify-fba8c",
  storageBucket: "wavify-fba8c.firebasestorage.app",
  messagingSenderId: "250540513772",
  appId: "1:250540513772:web:27a2285c3a5ac9a9d348c9",
  measurementId: "G-FCDS6QGDS4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);