import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCmKnGqk0JP8Orc8u4El69dkVVgpKYQ-gM",
    authDomain: "crown-db-a5ded.firebaseapp.com",
    databaseURL: "https://crown-db-a5ded.firebaseio.com",
    projectId: "crown-db-a5ded",
    storageBucket: "crown-db-a5ded.appspot.com",
    messagingSenderId: "25442814394",
    appId: "1:25442814394:web:e78451bce54843fd983583",
    measurementId: "G-5G95G1DMLC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;