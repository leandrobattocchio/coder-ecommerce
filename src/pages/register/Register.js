import React, { useEffect } from 'react'
import joystick from '../../images/control.webp'
import useRegister from '../../hooks/useRegister'
import { Link, useNavigate } from 'react-router-dom'
import { GlobalProvider } from '../../context/GlobalContextProvider'
import Form from '../../components/form/Form'
import './register.css'
import { Helmet } from 'react-helmet'

const Register = () => {
  const { logged, setLoading } = GlobalProvider()
  const navigate = useNavigate()
  const { email, password, nombre, apellido, numero, handleRegister, toggle } = useRegister()
  const INPUTS = [email, password, nombre, apellido, numero]

  useEffect(() => {
    if (logged) navigate('/')
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 400)
  }, [logged, navigate, setLoading])

  return (
    <main className='parent'>
      <Helmet>
        <title>Registro</title>
      </Helmet>
      <div className='formulario'>
        <img src={joystick} alt='nintendo' className='rounded mx-auto d-block'></img>
        <Form inputs={INPUTS} handleSubmit={handleRegister} toggle={toggle} buttonText='Registrarse' />
        <h3 className='question'>¿Ya tienes cuenta?<Link to={'/login'}> Logueate!</Link></h3>
      </div>
    </main>
  )
}

export default Register