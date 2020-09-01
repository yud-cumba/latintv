import db from '../ConexionFirebase';

// export const getMyReservedSpaces = (id) => db.collection('reservedSpaces').doc(id)
// .get()
// .then((doc) => {
//   console.log(doc);
// });

export const getData = (collectionName) => db.collection(collectionName)
  .onSnapshot((docs) => {
    console.log(docs);
  });
