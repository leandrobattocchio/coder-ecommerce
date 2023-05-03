import React, { useEffect } from 'react'
import joystick from '../../images/control.webp'
import useLogin from '../../hooks/useLogin'
import { Link, useNavigate } from 'react-router-dom'
import { GlobalProvider } from '../../context/GlobalContextProvider'
import Form from '../../components/form/Form'
import './login.css'
import { Helmet } from 'react-helmet'

const Login = () => {
  const { logged, setLoading } = GlobalProvider()
  const navigate = useNavigate()
  const { email, password, handleLogin, toggle } = useLogin()
  const INPUTS = [email, password]

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
        <title>Login</title>
      </Helmet>
      <div className='formulario' >
        <img src={joystick} alt='nintendo' className='rounded mx-auto d-block'></img>
        <Form inputs={INPUTS} handleSubmit={handleLogin} toggle={toggle} buttonText='Loguearse' />
        <h3 className='question'>¿No tienes cuenta?<Link to={'/register'}> Registrate!</Link></h3>
      </div>
    </main>
  )
}

export default Login