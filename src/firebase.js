import firebase from 'firebase';
// import { getStorage } from "firebase/storage";
// import {getFirestore} from "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBJLCbpYs70sWzqWtknqKM38OBat7KRqMM",
    authDomain: "auth-production-561fe.firebaseapp.com",
    projectId: "auth-production-561fe",
    storageBucket: "auth-production-561fe.appspot.com",
    messagingSenderId: "992104554241",
    appId: "1:992104554241:web:54ab5c6b295414ef4a4500"
});

const db = firebase.firestore();
export const auth = app.auth();

export const storage = firebase.storage(app);
export const database = firebase.database(app);
// export default app;
export default db;
// export const db = getFirestore();