import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQkoq9cAZwNcEj-9VSA1xqX7zgGPPfvXo",
  authDomain: "fir-recipes-75f0d.firebaseapp.com",
  projectId: "fir-recipes-75f0d",
  storageBucket: "fir-recipes-75f0d.appspot.com",
  messagingSenderId: "249298872364",
  appId: "1:249298872364:web:7d8bfc102bcd6ed5ea8989",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

