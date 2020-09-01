import db from '../ConexionFirebase';

export const getMyReservedSpaces = (id) => db.collection('reservedSpaces').doc(id)
.get()
.then((doc) => {
  console.log(doc);
});

export const logIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

export const logOut = (email, password) => firebase.auth().signOut()

