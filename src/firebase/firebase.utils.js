import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA6I-_hU9GUIO9Jkpeu3NO1riv0jDUCZf4",
  authDomain: "crwn-db-50ce4.firebaseapp.com",
  databaseURL: "https://crwn-db-50ce4.firebaseio.com",
  projectId: "crwn-db-50ce4",
  storageBucket: "crwn-db-50ce4.appspot.com",
  messagingSenderId: "820104922456",
  appId: "1:820104922456:web:9ba195396fe6e7a570512d"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;