// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-0zb19WSBPXqeHlBp2eYL1Q-adyJkrHw",
  authDomain: "dotoapp-456f2.firebaseapp.com",
  projectId: "dotoapp-456f2",
  storageBucket: "dotoapp-456f2.appspot.com",
  messagingSenderId: "332317757929",
  appId: "1:332317757929:web:4e73cd606094689177bb78"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth