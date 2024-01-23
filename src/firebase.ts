import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQQdDLImj_2kxfOUUlBLhITt2Z682d95k",
  authDomain: "perso-news-app.firebaseapp.com",
  projectId: "perso-news-app",
  storageBucket: "perso-news-app.appspot.com",
  messagingSenderId: "906006395441",
  appId: "1:906006395441:web:a03165775f4621fe123310",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const PS_MENU = { COL: collection(db, "ps_menu"), LABEL: "label" };
const PS_SNACK = { COL: collection(db, "ps_snack"), LABEL: "label" };

export { db, PS_MENU, PS_SNACK };
