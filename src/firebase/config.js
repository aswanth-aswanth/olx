import { initializeApp } from 'firebase/app';
import 'firebase/auth'
import 'firebase/storage';
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDaHHjwikd-sRMEN8LmCOUryUV8yuvA6hI",
    authDomain: "starry-aegis-390106.firebaseapp.com",
    projectId: "starry-aegis-390106",
    storageBucket: "starry-aegis-390106.appspot.com",
    messagingSenderId: "813671292291",
    appId: "1:813671292291:web:5dcd5716c559b3f1da6ab6",
    measurementId: "G-FQLFCGYL7L"
  };

const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
export default app;