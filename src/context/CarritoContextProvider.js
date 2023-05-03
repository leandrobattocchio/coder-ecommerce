import React, { useContext, useEffect, useState, createContext } from 'react'
import { findCart, addPurchase } from '../services/carritoService'
import { GlobalProvider } from './GlobalContextProvider';

const CarritoContext = createContext('')

export const CarritoProvider = () => useContext(CarritoContext)

export const CarritoContextProvider = ({ children }) => {

  const { logged } = GlobalProvider()
  const [carrito, setCarrito] = useState([])

  const addToCart = (compra) => {
    addPurchase(compra, logged.email)
      .then((updatedCart) => {
        setCarrito(updatedCart)
      })
  }

  const cleanCart = () => {
    setCarrito([])
  }

  const deleteGamePurchase = (compraId) => {
    setCarrito(carrito.filter(compra => compra.id !== compraId))
  }

  useEffect(() => {
    if (logged) {
      findCart(logged.email)
        .then((cart) => {
          setCarrito(cart)
        })
    }
  }, [logged])

  return (
    <CarritoContext.Provider value={{ carrito, addToCart, cleanCart, deleteGamePurchase }}>
      {children}
    </CarritoContext.Provider>
  )
}
