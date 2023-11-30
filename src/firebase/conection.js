// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAar3z59ikDB6ukh19uzOvDVYbq2_VSjRk",
  authDomain: "nnode-marvel.firebaseapp.com",
  projectId: "nnode-marvel",
  storageBucket: "nnode-marvel.appspot.com",
  messagingSenderId: "890281651446",
  appId: "1:890281651446:web:174962aba0f1c48b01d0d7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
