// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBjWTMu02dP2irHz6I_fLWJZEjuNk_Hf90',
  authDomain: 'chiaos-16bd1.firebaseapp.com',
  projectId: 'chiaos-16bd1',
  storageBucket: 'chiaos-16bd1.firebasestorage.app',
  messagingSenderId: '966513597562',
  appId: '1:966513597562:web:d1c7b81310f7ca9d72efc3',
  measurementId: 'G-2W2HB1N6SF',
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const firestore = getFirestore(firebase);
export const functions = getFunctions(firebase, 'europe-west3');
