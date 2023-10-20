import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
});

export default app;

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
  }).catch((error) => {
    console.log(error.message);
  });
};

const twitterProvider = new firebase.auth.TwitterAuthProvider();

export const signInWithTwitter = () => {
  auth.signInWithPopup(twitterProvider).then((res) => {
  }).catch((error) => {
    console.log(error.message);
  });
};

const facebookProvider = new firebase.auth.FacebookAuthProvider();

export const signInWithFacebook = () => {
  auth.signInWithPopup(facebookProvider).then((res) => {
  }).catch((error) => {
    console.log(error.message);
  });
};



export const logOut = () => {
  auth.signOut().then(() => {
    console.log('logged out');
  }).catch((error) => {
    console.log(error.message);
  });
};

export const db = firebase.database().ref();

