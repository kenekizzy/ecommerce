import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database'

const firebaseConfig = {
    apiKey: "AIzaSyDJerNkE_tbrB86nSBx9mWLN3ZRcNXOovY",
    authDomain: "crwn-store-e514f.firebaseapp.com",
    projectId: "crwn-store-e514f",
    storageBucket: "crwn-store-e514f.appspot.com",
    messagingSenderId: "52651145723",
    appId: "1:52651145723:web:b718864ec61abf82fdb35e",
    measurementId: "G-XVDRSRQ46J"
  };

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);


  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;