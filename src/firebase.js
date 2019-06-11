import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyAr44hV-eFIwqcdkwf2zqZ6f8W1i-Dlcpw",
    authDomain: "diplomski-rad-49b59.firebaseapp.com",
    databaseURL: "https://diplomski-rad-49b59.firebaseio.com",
    projectId: "diplomski-rad-49b59",
    storageBucket: "diplomski-rad-49b59.appspot.com",
    messagingSenderId: "968307817678",
    appId: "1:968307817678:web:58f16efaf6a0a108"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;