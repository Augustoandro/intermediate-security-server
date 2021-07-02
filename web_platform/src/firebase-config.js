import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGT0cBNSj9ieQ1x4W3_z9ngWKwz2XQaek",
  authDomain: "cloud-security-dcc2c.firebaseapp.com",
  projectId: "cloud-security-dcc2c",
  storageBucket: "cloud-security-dcc2c.appspot.com",
  messagingSenderId: "201328330357",
  appId: "1:201328330357:web:78f17075c9585a4531da3c",
  measurementId: "G-05PQNPQ7RF",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
