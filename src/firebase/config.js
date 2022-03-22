import * as firebase from 'firebase'
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAZtdkyKwJnIJn5sMf1DYEeZEnhLjfWw6I",
  authDomain: "whole-me.firebaseapp.com",
  projectId: "whole-me",
  storageBucket: "whole-me.appspot.com",
  messagingSenderId: "304744982069",
  appId: "1:304744982069:web:1c436dcaf01f039d33b37c"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
