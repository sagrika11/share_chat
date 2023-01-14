
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
    apiKey: "AIzaSyDnLrli7rvhhkZiDnnjENMR6fZlu5JjE74",
    authDomain: "share-chat-3bc4d.firebaseapp.com",
    projectId: "share-chat-3bc4d",
    storageBucket: "share-chat-3bc4d.appspot.com",
    messagingSenderId: "968296208162",
    appId: "1:968296208162:web:06e71d410f761727a3777b"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()