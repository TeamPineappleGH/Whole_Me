import * as firebase from 'firebase'
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDdoJmb3sPrTd6nSQwfIohND7y7HeVzV8g",
  authDomain: "whole-me-685aa.firebaseapp.com",
  projectId: "whole-me-685aa",
  storageBucket: "whole-me-685aa.appspot.com",
  messagingSenderId: "37431814899",
  appId: "1:37431814899:web:8bd7ef5f1eed9e4df46586",
  measurementId: "G-41Z60F58BG"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export {
    auth,
    db,
    firebase
}
