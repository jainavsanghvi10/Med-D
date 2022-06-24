import firebase from 'firebase';
// import { getStorage } from "firebase/storage";
// import {getFirestore} from "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBsBQGgRHEBszIBSg9td6OXu9_dSX0F5-w",
    authDomain: "friska-production.firebaseapp.com",
    databaseURL: "https://friska-production-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "friska-production",
    storageBucket: "friska-production.appspot.com",
    messagingSenderId: "421390674423",
    appId: "1:421390674423:web:2bd1df096218059fbfa6f2",
    measurementId: "G-MG3R2S2SJ9"
});

const db = firebase.firestore();
export const auth = app.auth();

export const storage = firebase.storage(app);
export const database = firebase.database(app);
// export default app;
export default db;
// export const db = getFirestore();