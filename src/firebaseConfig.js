// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcRb5NP43z3suqfmRl29U9b98irCLcgUo",
    authDomain: "sportkek.firebaseapp.com",
    projectId: "sportkek",
    storageBucket: "sportkek.firebasestorage.app",
    messagingSenderId: "217169658247",
    appId: "1:217169658247:web:bc307d10c4808ca1cc9322"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;