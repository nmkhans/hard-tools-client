import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAmuZBtB7wGo5snWmrW47Jzqlhw9yYvrso",
  authDomain: "nmk-hard-tools.firebaseapp.com",
  projectId: "nmk-hard-tools",
  storageBucket: "nmk-hard-tools.appspot.com",
  messagingSenderId: "901285057797",
  appId: "1:901285057797:web:b937b1bab5f483b617536c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;