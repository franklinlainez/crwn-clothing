import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCanX_r4bz_9Zao8_x5lzirCWlKuMy8N1w",
  authDomain: "crwn-db-14b7a.firebaseapp.com",
  projectId: "crwn-db-14b7a",
  storageBucket: "crwn-db-14b7a.appspot.com",
  messagingSenderId: "689704044495",
  appId: "1:689704044495:web:33fda850abbf9daf5db4ba",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
