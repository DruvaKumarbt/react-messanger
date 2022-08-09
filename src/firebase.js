// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhSLNgda5e4IeJqegouMgzId5DoHjY6i0",
  authDomain: "react-messanger-eaf2f.firebaseapp.com",
  databaseURL: "https://react-messanger-eaf2f.firebaseio.com ",
  projectId: "react-messanger-eaf2f",
  storageBucket: "react-messanger-eaf2f.appspot.com",
  messagingSenderId: "526271633821",
  appId: "1:526271633821:web:730eb370cdfc15a154b774",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
