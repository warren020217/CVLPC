import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence
} from "firebase/auth";
import {
  getFirestore
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHpiAbCeI6kt1WqCGlT9hT4i3hjuLt5Io",
  authDomain: "cvlpc-c9f07.firebaseapp.com",
  projectId: "cvlpc-c9f07",
  storageBucket: "cvlpc-c9f07.firebasestorage.app",
  messagingSenderId: "700493126900",
  appId: "1:700493126900:web:a98cb9ddcbccccb759d2a1"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Firebase persistence error:", error);
});

const db = getFirestore(app);

export {
  app,
  auth,
  db
};
