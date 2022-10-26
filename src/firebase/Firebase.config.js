// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd2P7hOFZN3Qh0VuLYf_kkRpfv45IZ94k",
  authDomain: "learn-with-mubarak.firebaseapp.com",
  projectId: "learn-with-mubarak",
  storageBucket: "learn-with-mubarak.appspot.com",
  messagingSenderId: "1092701658549",
  appId: "1:1092701658549:web:ba2a9a16898c37129b8dfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;