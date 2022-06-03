import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDhdZ1IAp073tMP0ubclRjxCXlq86TLXvw",
  authDomain: "hafiz-blog.firebaseapp.com",
  projectId: "hafiz-blog",
  storageBucket: "hafiz-blog.appspot.com",
  messagingSenderId: "840706888039",
  appId: "1:840706888039:web:8a35776cc219c08bf65fc2"
};

//init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp


export { projectAuth, projectFirestore, timestamp }