import firebase from "firebase/app";
import "firebase/firestore";

// Config
const firebaseConfig = {
  apiKey: "AIzaSyAa-iiou7j-g141QLfSvfJTnLT4LJZl4ow",
  authDomain: "safka-1b0f9.firebaseapp.com",
  projectId: "safka-1b0f9",
  storageBucket: "safka-1b0f9.appspot.com",
  messagingSenderId: "356912749171",
  appId: "1:356912749171:web:7548221faf574ef639e806",
  measurementId: "G-53T5P7XSQY",
};

const firebaseInit = firebase.initializeApp(firebaseConfig);

export { firebaseInit };
