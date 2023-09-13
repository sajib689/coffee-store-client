// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHnXn7_BdqegCu9A7RTzJS-Tft1oNLwgk",
  authDomain: "coffee-store-cea0c.firebaseapp.com",
  projectId: "coffee-store-cea0c",
  storageBucket: "coffee-store-cea0c.appspot.com",
  messagingSenderId: "992722797512",
  appId: "1:992722797512:web:9f0b127295b078eac076fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;