import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import SignIn from '../components/sign-in/sign-in';

const config = {
  apiKey: "AIzaSyB2tP4LzsxBC3JREDeXBQEwxFvgBNfBjTc",
  authDomain: "crwn-db-f5301.firebaseapp.com",
  projectId: "crwn-db-f5301",
  storageBucket: "crwn-db-f5301.appspot.com",
  messagingSenderId: "35224412373",
  appId: "1:35224412373:web:82be4e4c05173a7be5025c",
  measurementId: "G-JGNLDHL5YW"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;