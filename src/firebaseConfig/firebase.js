// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5yYT_fL9_zpJBsj9zA23_FmhUt5EtHZE",
  authDomain: "crud-2022-poo.firebaseapp.com",
  databaseURL: "https://crud-2022-poo-default-rtdb.firebaseio.com",
  projectId: "crud-2022-poo",
  storageBucket: "crud-2022-poo.appspot.com",
  messagingSenderId: "857605165650",
  appId: "1:857605165650:web:5c6bd81d038dfe7d97858b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);