import firebase from "firebase/app";

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBmgQbUC5QbWLOcrwJ088DsOpZ4wkMCrvY",
  authDomain: "electron-site-59e52.firebaseapp.com",
  projectId: "electron-site-59e52",
  storageBucket: "electron-site-59e52.appspot.com",
  messagingSenderId: "757979216265",
  appId: "1:757979216265:web:4bbc3ed973b83fd0de0958",
  measurementId: "G-0TFRTJJ7EZ"
}

function firebaseClient() {
  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
}

export default firebaseClient; 