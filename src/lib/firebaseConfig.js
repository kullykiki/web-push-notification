// lib/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD7uGojCRqe-dAhbrW6MZLxxGShXSlSQ_c",
    authDomain: "web-push-84db6.firebaseapp.com",
    projectId: "web-push-84db6",
    storageBucket: "web-push-84db6.firebasestorage.app",
    messagingSenderId: "1037182323733",
    appId: "1:1037182323733:web:60d030b269d6522c2f121c",
    measurementId: "G-140B57D7QG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging, getToken, onMessage };
