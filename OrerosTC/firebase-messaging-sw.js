// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.2/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

firebase.initializeApp({
    apiKey: "AIzaSyAspn8SZGKHpZaJHSdjXjJNNUVc2lblqdc",
    authDomain: "oreros-de-tierra-caliente.firebaseapp.com",
    projectId: "oreros-de-tierra-caliente",
    storageBucket: "oreros-de-tierra-caliente.appspot.com",
    messagingSenderId: "957271358266",
    appId: "1:957271358266:web:757d1df6bd053e333cee03",
    measurementId: "G-TF4S2FPFLW"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();