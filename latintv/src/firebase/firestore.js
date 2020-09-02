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

export const getReservedSpace = (id) => db.collection('reservedSpaces').doc(id)
.get()
.then((doc) =>  {
  return doc.data();
});

export const addReservedSpace = (userId, programId, programName, reservedHour, date) => db.collection('reservedSpaces').add({
  userId,
  programId,
  programName,
  reservedHour,
  date,
});

export const updateData = (collection, docId, field, value) => db.collection(collection).doc(docId).update({
    [field]: value,
  });
export const addSpaceToUser = (newSpaceId , userId) =>{
  getUser(userId)
    .then((user) => user.reservedSpacesId)
    .then((spacesId) => {
      spacesId.push(newSpaceId)
      return spacesId
    })
    .then((value) => db.collection('users').doc(userId).update({
      reservedSpacesId: value,
    }))
};

// export const logIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

// export const logOut = (email, password) => firebase.auth().signOut()

