import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc 
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB2tP4LzsxBC3JREDeXBQEwxFvgBNfBjTc",
  authDomain: "crwn-db-f5301.firebaseapp.com",
  projectId: "crwn-db-f5301",
  storageBucket: "crwn-db-f5301.appspot.com",
  messagingSenderId: "35224412373",
  appId: "1:35224412373:web:82be4e4c05173a7be5025c",
  measurementId: "G-JGNLDHL5YW"
};

const firebaseApp = initializeApp(firebaseConfig);
// it's possible to have different providers, like facebook for example, that's why googleProvider is a class
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  // if user data does not exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    // know when users are signing in
    const createdAt = new Date();
    // try catch block: try something asynchronous, if what you do in the block throws an error, catch the error and do something with it 
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
        console.log("There was an error creating the user", error.message);
    }
  }
  // create/set the document with the data from userAuth in my collection
  // check if user data exists
  return userDocRef
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  // if I don't get an email or a password, I want to exit, I don't want to run this method
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  // if I don't get an email or a password, I want to exit, I don't want to run this method
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}
