import db from '../ConexionFirebase';

export const getMyReservedSpaces = (id) => db.collection('reservedSpaces').doc(id)
.get()
.then((doc) =>  {
  return doc.data();
});

export const getData = (collectionName, callback) => db.collection(collectionName)
  .onSnapshot((docs) => {
    const data = [];
    docs.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    return data
  });


export const addNewSpace = (userId, programId, reservedHour, date) => db.collection('reservedSpaces').add({
  userId,
  programId,
  reservedHour,
  date,
});
// export const logIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

// export const logOut = (email, password) => firebase.auth().signOut()

