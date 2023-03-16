// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWxRzzV8YAjIV7_IhqES-H5eP8ajKrISs",
    authDomain: "reactproject-1e1f4.firebaseapp.com",
    projectId: "reactproject-1e1f4",
    storageBucket: "reactproject-1e1f4.appspot.com",
    messagingSenderId: "721563069378",
    appId: "1:721563069378:web:95df37eb91d3f182af045b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

export default app