import { initializeApp, getApp,getApps } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDjroD0oDuzH2IGdHu30Ezoi5EBPfh30-4",
    authDomain: "prepwise-9b004.firebaseapp.com",
    projectId: "prepwise-9b004",
    storageBucket: "prepwise-9b004.firebasestorage.app",
    messagingSenderId: "580655677581",
    appId: "1:580655677581:web:1d13950a0875c15b9ae2c4",
    measurementId: "G-WT626SWNPE"
};

// Initialize Firebase

const app = !getApps.length? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
