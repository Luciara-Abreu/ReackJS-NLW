import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCKU_bD3SK2pFCme3YmxzLeD6YHjWVY19w",
  authDomain: "letmeask-71cd9.firebaseapp.com",
  databaseURL: "https://letmeask-71cd9-default-rtdb.firebaseio.com",
  projectId: "letmeask-71cd9",
  storageBucket: "letmeask-71cd9.appspot.com",
  messagingSenderId: "81149429410",
  appId: "1:81149429410:web:8dd5bc19d8e5a04b85b9fb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();

