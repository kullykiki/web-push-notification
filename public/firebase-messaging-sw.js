// public/firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js");

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
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Background message handling
messaging.onBackgroundMessage((payload) => {
    console.log("Received background message: ", payload);
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: payload.notification.icon,
    });
});
