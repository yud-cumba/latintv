import { signIn, createUser } from '../firebase/auth';
import { useHistory, Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firebase-auth'
import React from "react";

// FUNCION PARA LOGUEAR UN USUARIO
// export const signInAccount = (email, password) => {
//     let history = useHistory();
//     signIn(email, password)
//     .then((result) => {                
//         console.log('hola')
//         if (result.user.emailVerified === false) {
//             firebase.auth().signOut();
//             } else {
//             console.log('si ingresa');
//             // <Redirect to='/reserva' />
//             useHistory().push("/reserva");
//             }
//     });
// };
export const crearCuenta = (email, password) => {
    createUser(email, password)
    .then((result)=>{
        const configuracion = {
            url: 'http://localhost:3000/login',
          };
          result.user.sendEmailVerification(configuracion);
    })
}
// const user = firebase.auth().currentUser;
// traerUsuarios(user.email, traerDataUsuario);

// const traerUsuarios = (email, cb) => {
//     firebase.firestore().collection('users').doc(email).onSnapshot((querySnapshot) => {
//       cb(querySnapshot.data());
//     });
//   };