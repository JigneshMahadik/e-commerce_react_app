// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfrfcVksG0DcA8wZ4h9oZ1QwrXrkdgzmk",
  authDomain: "ecommerce-5d070.firebaseapp.com",
  projectId: "ecommerce-5d070",
  storageBucket: "ecommerce-5d070.appspot.com",
  messagingSenderId: "192278546504",
  appId: "1:192278546504:web:e020c1e17fb5be176a707d",
  measurementId: "G-N4FLNCF2QG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export {app, db};