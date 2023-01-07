import React from 'react'
import { useField } from '../../hooks/useField'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword, sendEmailVerification} from "firebase/auth";
import validator from 'validator'

const Registro = () => {
  const email = useField({ type: 'text' })
  const password = useField({ type: 'password' })

  const handleRegister = (e) => {
    e.preventDefault()
    if (validator.isEmail(email.value)) {
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            sendEmailVerification(auth.currentUser)
            .then(() => {
              console.log('email de verificacion enviado!')
            })  
          console.log(userCredential)
        })
        .catch((error)=>{
          console.log(error.code)
          console.log(error.message)
          alert('error')
        })
    } else {
      alert('Email invalido')
    }

  }

  return (
    <div>
      <form onSubmit={handleRegister}>
        <input {...email} placeholder='Email...' required />
        <input {...password} placeholder='Password...' required />
        <button>Registrarse!</button>
      </form>
    </div>
  )
}

export default Registro