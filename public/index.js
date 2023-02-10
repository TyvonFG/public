// Our Server Side JavaScript
import { initializeApp } from 'firebase/app'; 
import {getAuth} from 'firebase/auth';
import{getFirestorem, collection, getDocs, getDoc } from 'firebase/firestore';
const firebaseApp = initializeApp({
    // Import the functions you need from the SDKs you need

  apiKey: "AIzaSyDvhYkWi5HbdF2S-jIvLjAhMtu9-_0ZVUE",
  authDomain: "interactive-timeline-project.firebaseapp.com",
  projectId: "interactive-timeline-project",
  storageBucket: "interactive-timeline-project.appspot.com",
  messagingSenderId: "620729376001",
  appId: "1:620729376001:web:8ef29363c77cdf2df98f00",
  measurementId: "G-NPP87152G8"


});
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
db.collection('todos').getDocs();
const todosCol = collection(db, 'todos');
const snapshot = await getDocs(todosCol);


// Detect auth state
onAuthStateChanged(auth, user => {
    if(user != null){
        console.log('logged in!');
    }else{
        console.log('no user');
    }
});

const express = require('express');
const app = express();
app.use(express.static('public'));

exportd.app = functions.https.onRequest(app)



