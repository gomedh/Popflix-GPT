// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB58-3En1pe6nWzT7mnPQuKiKx_k1FsOzk",
  authDomain: "netflixgpt04.firebaseapp.com",
  projectId: "netflixgpt04",
  storageBucket: "netflixgpt04.appspot.com",
  messagingSenderId: "673108042710",
  appId: "1:673108042710:web:9d04e10d457b235a4c3a77",
  measurementId: "G-N19YPTZ3JJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// FireBase GetAuth
export const auth = getAuth(); // Required in all API , so declared centerally here