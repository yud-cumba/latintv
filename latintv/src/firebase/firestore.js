import db from '../ConexionFirebase';

export const getData = (collectionName) => db.collection(collectionName)
  .onSnapshot((docs) => {
    const data = [];
    docs.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    return data
  });
  export const getAllData = (callback, collectionName) => db.collection(collectionName)
  .onSnapshot((docs) => {
    const data = [];
    docs.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    callback(data);
  });

export const getUser = (id) => db.collection('users').doc(id)
.get()
.then((doc) =>  {
  return doc.data();
});

export const getTvProgram = (id) => db.collection('tvprograms').doc(id)
.get()
.then((doc) =>  {
  return doc.data();
});

export const getReservedSpace = (id) => db.collection('tvprograms').doc(id)
.get()
.then((doc) =>  {
  return doc.data();
});

export const addNewSpace = (userId, programId, reservedHour, date) => db.collection('reservedSpaces').add({
  userId,
  programId,
  reservedHour,
  date,
});
export const getVvprograms = (callback) => db.collection('tvprograms').get()
.then((snapShots)=>{
  let programas = [];
  programas = snapShots.docs.map(doc => {
    return {id: doc.id, data: doc.data()}
})
callback(programas);
})
// export const logIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

// export const logOut = (email, password) => firebase.auth().signOut()

