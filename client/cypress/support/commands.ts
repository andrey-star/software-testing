import { attachCustomCommands } from 'cypress-firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBaQOqFMNUN5PL2po65txSjdCGNBYxdToY',
  authDomain: 'software-testing-f4e26.firebaseapp.com',
  projectId: 'software-testing-f4e26',
  storageBucket: 'software-testing-f4e26.appspot.com',
  messagingSenderId: '296199048867',
  appId: '1:296199048867:web:1d8eaa8dd23819f82b7916',
};

firebase.initializeApp(firebaseConfig);

attachCustomCommands({ Cypress, cy, firebase });
