import db from '../ConexionFirebase';

export const getMyReservedSpaces = (id) => db.collection('reservedSpaces').doc(id)
.get()
.then((doc) => {
  console.log(doc);
});
