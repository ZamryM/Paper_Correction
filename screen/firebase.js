import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDemxbLTc9Jpgp8D21eJKdQ2gm0r2RIIUI",
  authDomain: "paper-ef68b.firebaseapp.com",
  projectId: "paper-ef68b",
  storageBucket: "paper-ef68b.appspot.com",
  messagingSenderId: "693767772019",
  appId: "1:693767772019:web:21b554b478cd49a2ddd706"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();




