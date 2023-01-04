import React, { useContext } from 'react'
import './cartWidget.css'
import carritoImg from '../../images/carrito.png'
import { CarritoContext } from '../../context/CarritoContextProvider'

const CartWidget = () => {

  const {carrito} = useContext(CarritoContext)
  return (
    <div className='logo'>
      <img src={carritoImg} alt='carrito'/>
      <div className='contador'>
        {carrito}
      </div>
    </div>
  )
}

export default CartWidget