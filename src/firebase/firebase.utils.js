import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAon0Qi7XmKVKXM4oNX-3CPGxbhFckTvZg",
  authDomain: "reactj-crwn-db.firebaseapp.com",
  projectId: "reactj-crwn-db",
  storageBucket: "reactj-crwn-db.appspot.com",
  messagingSenderId: "663737065885",
  appId: "1:663737065885:web:8c892d0c318bcd17a98f74",
  measurementId: "G-95PT7P4GVJ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
