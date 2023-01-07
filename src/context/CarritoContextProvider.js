import React, { createContext, useState, useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../firebase'


export const CarritoContext = createContext('')

export const CarritoContextProvider = ({ children }) => {

  const [carrito, setCarrito] = useState(0)
  const [logged, setLogged] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogged(true)
      } else {
        setLogged(false)
      }
    });
  }, [])


  return (
    <CarritoContext.Provider value={{ carrito, setCarrito, logged }}>{children}</CarritoContext.Provider>
  )
}
