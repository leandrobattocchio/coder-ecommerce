import React from 'react'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword, browserLocalPersistence, setPersistence } from "firebase/auth";
import { useField } from '../../hooks/useField'
import validator from 'validator'
import './login.css'
import joystick from '../../images/control.png'

const Login = () => {

  const email = useField({ type: 'text' })
  const password = useField({ type: 'password' })

  const handleLogin = (e) => {
    e.preventDefault()
    if (validator.isEmail(email.value)) {
      setPersistence(auth, browserLocalPersistence)
        .then(() => {
          signInWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
              console.log(userCredential)
              alert('Logueado con exito!')
            })
            .catch((error) => {
              console.log(error.code)
              console.log(error.message)
              alert('Email o contrasenia incorrecta!')
            })
        })
    } else {
      alert('Formato de email invalido!')
    }
  }

  return (
    <div className='formulario' >
      <img src={joystick} alt='nintendo' className='rounded mx-auto d-block'></img>
      <form onSubmit={handleLogin} className='formulario'>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input {...email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input {...password} class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
    </div>
  )
}

export default Login