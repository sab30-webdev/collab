import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

var conf = {
  apiKey: "AIzaSyDqBHAObwnnbwxzkBnQIJt7fAaniobuacQ",
  authDomain: "collab-6bb44.firebaseapp.com",
  projectId: "collab-6bb44",
  storageBucket: "collab-6bb44.appspot.com",
  messagingSenderId: "397564578796",
  appId: "1:397564578796:web:6d0423d311dd9d0c818ec9",
};

const firebaseApp = initializeApp(conf);

export const init = function () {
  return firebaseApp;
};
export const db = getFirestore();
