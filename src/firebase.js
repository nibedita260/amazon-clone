// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAMDOD8KbKTueVFEmTngFFfy5aI-dUigSk",
  authDomain: "clone-550b6.firebaseapp.com",
  databaseURL: "https://clone-550b6.firebaseio.com",
  projectId: "clone-550b6",
  storageBucket: "clone-550b6.appspot.com",
  messagingSenderId: "365522109189",
  appId: "1:365522109189:web:8f01ffd36c08a9e62c2d6c",
  measurementId: "G-JZSW4E2KPJ",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
