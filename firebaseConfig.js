import { initializeApp } from "firebase/app";

import {getReactNativePersistence, initializeAuth} from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getFirestore, collection} from 'firebase/firestore'


// 1. create new project on firebase console
// 2. enable email and password auth provider in authentication
// 3. create a web app and copy the firebseConfigs below 

const firebaseConfig = {
  apiKey: "AIzaSyBkvTVApVPah62TmOkLTnBZZImx73KAjWU",
  authDomain: "chat-firebase-twiig.firebaseapp.com",
  projectId: "chat-firebase-twiig",
  storageBucket: "chat-firebase-twiig.firebasestorage.app",
  messagingSenderId: "153556749805",
  appId: "1:153556749805:web:cda71c232e47c17d2c6be4",
  measurementId: "G-SWBE58R9KL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);

export const usersRef = collection(db, 'users');
export const roomRef = collection(db, 'rooms');
