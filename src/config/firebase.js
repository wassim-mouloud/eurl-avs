import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDEnPZsKwNrFz-C9rCht6Tlc23TXM2ZZU",
  authDomain: "eurl-avs.firebaseapp.com",
  projectId: "eurl-avs",
  storageBucket: "eurl-avs.appspot.com",
  messagingSenderId: "349299187139",
  appId: "1:349299187139:web:bd62a0b20b2354aa303176"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)