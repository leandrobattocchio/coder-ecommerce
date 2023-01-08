import React from 'react'
import { useField } from '../../hooks/useField'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import validator from 'validator'
import joystick from '../../images/control.png'

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
        .catch((error) => {
          console.log(error.code)
          console.log(error.message)
          alert('error')
        })
    } else {
      alert('Email invalido')
    }

  }

  return (
    <div className='formulario'>
      <img src={joystick} alt='nintendo' className='rounded mx-auto d-block'></img>
      <form className='formulario' onSubmit={handleRegister}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input {...email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input {...password} class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
      </form>
    </div>
  )
}

export default Registro