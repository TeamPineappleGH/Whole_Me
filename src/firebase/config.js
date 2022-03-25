import * as firebase from 'firebase'
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAZtdkyKwJnIJn5sMf1DYEeZEnhLjfWw6I",
  authDomain: "whole-me.firebaseapp.com",
  projectId: "whole-me",
  storageBucket: "whole-me.appspot.com",
  messagingSenderId: "304744982069",
  appId: "1:304744982069:web:1c436dcaf01f039d33b37c"
});

const auth = firebase.auth();
const db = firebaseConfig.firestore();

export {
    auth,
    db,
    firebase
}
