// Firebase configuration for the CVLPC web app
// This file is safe to include in the browser. Do not put service-account
// private keys or other server credentials here.
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";

export const firebaseConfig = {
  apiKey: "AIzaSyCHpiAbCeI6kt1WqCGlT9hT4i3hjuLt5Io",
  authDomain: "cvlpc-c9f07.firebaseapp.com",
  projectId: "cvlpc-c9f07",
  storageBucket: "cvlpc-c9f07.firebasestorage.app",
  messagingSenderId: "700493126900",
  appId: "1:700493126900:web:a98cb9ddcbccccb759d2a1"
};

export const firebaseApp = initializeApp(firebaseConfig);
