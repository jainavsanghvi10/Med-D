import firebase from 'firebase';

// import {getFirestore} from "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCX_3acgwyllXQhdajaibqN3092Ea8AApI",
    authDomain: "sportify-main.firebaseapp.com",
    projectId: "sportify-main",
    storageBucket: "sportify-main.appspot.com",
    messagingSenderId: "657882108497",
    appId: "1:657882108497:web:1d4bb6a165a980c656de70",
    measurementId: "G-ZRQHCLHYF4"
});


export const auth = app.auth();
export default app
// export const db = getFirestore();

