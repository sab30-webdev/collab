import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyDqBHAObwnnbwxzkBnQIJt7fAaniobuacQ",
  authDomain: "collab-6bb44.firebaseapp.com",
  projectId: "collab-6bb44",
  storageBucket: "collab-6bb44.appspot.com",
  messagingSenderId: "397564578796",
  appId: "1:397564578796:web:6d0423d311dd9d0c818ec9",
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();

export const db = firebaseApp.firestore();

export default firebaseApp;
