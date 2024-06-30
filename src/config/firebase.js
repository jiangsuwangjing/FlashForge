import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, setPersistence, browserSessionPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAotbDh-yYGzxyNsFrmzrGMxgtjL8guNL8",
  authDomain: "flashforge-f292c.firebaseapp.com",
  projectId: "flashforge-f292c",
  storageBucket: "flashforge-f292c.appspot.com",
  messagingSenderId: "463837186358",
  appId: "1:463837186358:web:aa4441776e480247c5cb97",
  measurementId: "G-ZWM2ZSQVGC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return signInWithEmailAndPassword(auth, email, password);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });

export const googleProvider = new GoogleAuthProvider();

export const db = new getFirestore(app);

