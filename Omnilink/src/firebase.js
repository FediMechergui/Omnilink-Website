// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNrzGzfb_CnG6H4Tjt4Ic3r_hp6DbScwM",
  authDomain: "omnilink-147bc.firebaseapp.com",
  projectId: "omnilink-147bc",
  storageBucket: "omnilink-147bc.appspot.com",
  messagingSenderId: "279442478517",
  appId: "1:279442478517:web:2d8f7cd4266d5799f9f5fc",
  measurementId: "G-06Q22FFTCH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };