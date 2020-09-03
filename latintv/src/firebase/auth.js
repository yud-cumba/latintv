import firebase from 'firebase/app';
import 'firebase/firebase-auth'

export const signIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);
export const signOut = () => firebase.auth().signOut();

export const createUser = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);
  