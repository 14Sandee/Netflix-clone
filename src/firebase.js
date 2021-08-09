import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC3A68hZyhf-9ysb8fTvGjkRpIFAnW8fyE",
    authDomain: "netflix-clone-d5fd8.firebaseapp.com",
    projectId: "netflix-clone-d5fd8",
    storageBucket: "netflix-clone-d5fd8.appspot.com",
    messagingSenderId: "292643437235",
    appId: "1:292643437235:web:25872760d0ef6d2d070ec6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;
 