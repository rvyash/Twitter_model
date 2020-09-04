import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAO4erwJcAEKpJvXuKcjwo1mcCKunm-7vg",
    authDomain: "twitter-project-45fc0.firebaseapp.com",
    databaseURL: "https://twitter-project-45fc0.firebaseio.com",
    projectId: "twitter-project-45fc0",
    storageBucket: "twitter-project-45fc0.appspot.com",
    messagingSenderId: "83355715500",
    appId: "1:83355715500:web:79c53087e79d4586ad1c09",
    measurementId: "G-0EBY7QX8F9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;