import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAw36XhQ48s6GUzULPKFqkWzLpnNi9FPN8",
    authDomain: "crwn-db-3edc3.firebaseapp.com",
    projectId: "crwn-db-3edc3",
    storageBucket: "crwn-db-3edc3.appspot.com",
    messagingSenderId: "970197070657",
    appId: "1:970197070657:web:d80b0cff8087e827fae7c0",
    measurementId: "G-GYDCK580F8"
  }


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;