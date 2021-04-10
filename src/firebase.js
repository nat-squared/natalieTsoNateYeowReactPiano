import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth"
import "firebase/storage";


var firebaseConfig = {
    apiKey: "AIzaSyDb8fsKUC2SzSTtaxnKs7p3rW7FUbuNPYY",
    authDomain: "piano-proj3.firebaseapp.com",
    projectId: "piano-proj3",
    storageBucket: "piano-proj3.appspot.com",
    messagingSenderId: "813737327852",
    appId: "1:813737327852:web:4423315d064da6f7d9b9c9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase;
