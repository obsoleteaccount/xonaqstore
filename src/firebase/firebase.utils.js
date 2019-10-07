import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyCxVP3aw70U8wK0MBfWdz_5wMfT4AYki-I",
        authDomain: "xonaqstore.firebaseapp.com",
        databaseURL: "https://xonaqstore.firebaseio.com",
        projectId: "xonaqstore",
        storageBucket: "",
        messagingSenderId: "4503369233",
        appId: "1:4503369233:web:15ccc5ed9d7073c5a763b0",
        measurementId: "G-57L2V1ZQYL"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;