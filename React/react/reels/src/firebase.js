import firebase from "firebase/app"
import "firebase/auth"
import "firebase/storage"
import "firebase/firestore"
firebase.initializeApp(
    {
        apiKey: "AIzaSyD2XilxxQvinKFKViHf6xSduNqda3wM69I",
        authDomain: "reels-class-32d69.firebaseapp.com",
        projectId: "reels-class-32d69",
        storageBucket: "reels-class-32d69.appspot.com",
        messagingSenderId: "531669142719",
        appId: "1:531669142719:web:422301cecbf9e93a810a0a"
      }
)
export const auth = firebase.auth();
const firestore = firebase.firestore();
export const database ={
    users:firestore.collection('users'),
    posts:firestore.collection('posts'),
    comments:firestore.collection('comments'),
    getCurrentTimeStamp : firebase.firestore.FieldValue.serverTimestamp
}
export const storage = firebase.storage();
// export default firebase;