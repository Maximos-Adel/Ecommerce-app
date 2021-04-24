import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC3NEyWLNv8pA6BJZI2Wdk2lgoh3PZQq0",
  authDomain: "ecommerce-3a428.firebaseapp.com",
  projectId: "ecommerce-3a428",
  storageBucket: "ecommerce-3a428.appspot.com",
  messagingSenderId: "149423998592",
  appId: "1:149423998592:web:69fcd092f3675a82774865",
  measurementId: "G-BTLMP9ZVWY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
