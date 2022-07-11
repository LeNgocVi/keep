import firebase from "firebase";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB50VRdRYw6sGz_n-Kr6rzl79g_yQfAy38",
  authDomain: "umbala-keep.firebaseapp.com",
  databaseURL: "https://umbala-keep-default-rtdb.firebaseio.com",
  projectId: "umbala-keep",
  storageBucket: "umbala-keep.appspot.com",
  messagingSenderId: "812673701951",
  appId: "1:812673701951:web:29d77fd7a583986608808a",
};

// Initialize Firebase
let app;
let db;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
  db = firebase.firestore();
} else {
  app = firebase.app();
}

const auth = firebase.auth();
export { auth, db };
