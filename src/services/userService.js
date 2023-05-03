import { auth, db } from '../firebase'
import { signInWithEmailAndPassword, browserLocalPersistence, setPersistence, createUserWithEmailAndPassword, sendEmailVerification, signOut, sendPasswordResetEmail } from "firebase/auth";
import validator from 'validator'
import { collection, addDoc, query, where, getDocs, updateDoc, doc } from "firebase/firestore";

//Funcion que recibe datos de un usuario para registrarlo, envia un correo de verificacion al email.
export const registerUser = async (email, password, nombre, apellido, numero) => {
  if (validator.isEmail(email)) {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      await sendEmailVerification(auth.currentUser)
      await addDoc(collection(db, 'users'), {
        email: email,
        cart: [],
        name: nombre,
        lastName: apellido,
        phone: numero,
      })
      return { type: 'success', text: 'Registro exitoso! Revisa tu email para la verificacion.' }

    } catch (error) {
      if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') return { type: 'error', text: 'Password demasiado corta!' }
      return { type: 'error', text: 'Email actualmente en uso!' }
    }
  } else {
    return { type: 'error', text: 'Email invalido!' }
  }
}
//Funcion que recibe email y password, para loguear a un usuario, y mantener la sesion.
export const loginUser = async (email, password) => {
  if (validator.isEmail(email)) {
    try {
      await setPersistence(auth, browserLocalPersistence)
      await signInWithEmailAndPassword(auth, email, password)
      if (!auth.currentUser.emailVerified) {
        await signOut(auth)
        return { type: 'error', text: 'Necesitas verificar el mail para loguearte!' }
      }
    } catch (error) {
      return { type: 'error', text: `Datos de validacion incorrectos` }
    }
    return { type: 'success', text: 'Te has logueado correctamente!' }
  }
}
//Funcion para desloguear al usuario
export const logoutUser = async () => {
  signOut(auth)
    .then(() => {
      console.log('Usuario deslogueado con exito!')
    }).catch((error) => {
      console.log(error.message)
    });
}
//Funcion para encontrar a un usuario en la base de datos por email
export const findUserByEmail = async (email) => {
  const queryFilter = query(
    collection(db, 'users'),
    where('email', "==", email)
  )

  const snapshot = await getDocs(queryFilter)
  return snapshot.docs[0]
}
//Funcion para actualizar los datos de un usuario 
export const updateUser = async (nombre, apellido, numero, email) => {
  const user = await findUserByEmail(email)
  const orderDoc = doc(db, 'users', user.id)
  await updateDoc(orderDoc, {
    name: nombre,
    lastName: apellido,
    phone: numero,
  })
  return { type: 'success', text: 'Informacion actualizada con exito!' }
}
//Funcion para cambiar la password del usuario via mail
export const restorePassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email)
    return { type: 'success', text: 'Email de restablecimiento de password enviado!' }
  } catch (error) {
    return { type: 'danger', text: 'Error, informacion invalida!' }
  }
}