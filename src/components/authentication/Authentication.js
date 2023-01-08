import React, { useEffect, useContext } from 'react'
import Registro from '../registro/Registro'
import useToggle from '../../hooks/useToggle'
import {CarritoContext} from '../../context/CarritoContextProvider'
import { useNavigate } from 'react-router-dom'
import Login from '../login/Login'

const Authentication = () => {
  const { toggle, handleToggle } = useToggle()
  const {logged} = useContext(CarritoContext)
  const navigate = useNavigate()

  useEffect(() => {    
    if(logged) navigate('/')
  }, [logged, navigate])
  
  return (
    <>
      {toggle
        ? <>
          <Login />
          <h3 style={{ gridColumn: '2/4', textAlign:'center'}}>¿No tienes cuenta?<b style={{color: 'blue'}} onClick={handleToggle}> ¡Registrate!</b></h3>
        </> 
        : <>
          <Registro />
          <h3 style={{ gridColumn: '2/4', textAlign:'center'}}>¿Ya tienes cuenta?<b style={{color: 'blue'}} onClick={handleToggle}> ¡Logueate!</b></h3>
        </>
      }
    </>
  )
}

export default Authentication