import React, { useEffect, useContext } from 'react'
import { useField } from '../../hooks/useField'
import validator from 'validator'
import Registro from '../registro/Registro'
import useToggle from '../../hooks/useToggle'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword, browserLocalPersistence, setPersistence } from "firebase/auth";
import {CarritoContext} from '../../context/CarritoContextProvider'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const email = useField({ type: 'text' })
  const password = useField({ type: 'password' })
  const { toggle, handleToggle } = useToggle()
  const {logged} = useContext(CarritoContext)
  const navigate = useNavigate()

  useEffect(() => {
    
    if(logged) navigate('/')
    
  }, [logged, navigate])
  


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
    <>
      {toggle
        ? <>
          <form onSubmit={handleLogin}>
            <input {...email} placeholder='Email..' required='required'></input>
            <input {...password} placeholder='Password...' required='required'></input>
            <button>Enviar</button>
          </form>
          <b onClick={handleToggle}>No tienes cuenta? Registrate!</b>
        </>
        : <>
          <Registro />
          <b onClick={handleToggle}>Ya tienes cuenta? Logueate!</b>
        </>
      }
    </>
  )
}

export default Login