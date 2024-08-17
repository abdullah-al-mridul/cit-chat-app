import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXJ6T57W25lK8M54q1kMghq-2KyUvDHAQ",
  authDomain: "cit-chat-app.firebaseapp.com",
  projectId: "cit-chat-app",
  storageBucket: "cit-chat-app.appspot.com",
  messagingSenderId: "618015771798",
  appId: "1:618015771798:web:0ec9e6125e9a05257d46b7",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { app, auth, provider };
