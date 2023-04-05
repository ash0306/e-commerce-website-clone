import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAwt0ZAYpimqrBXwWvsicU5wpSmCN7QF1s",
    authDomain: "clone-ecom-ed21e.firebaseapp.com",
    projectId: "clone-ecom-ed21e",
    storageBucket: "clone-ecom-ed21e.appspot.com",
    messagingSenderId: "739744824162",
    appId: "1:739744824162:web:5a4ae70efdeac55ebc8a3b",
    measurementId: "G-2ZRDWC9ZVY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};