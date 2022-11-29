import React from 'react'
import './cartWidget.css'
import carrito from '../../images/carrito.png'

const CartWidget = () => {

  const contador = 9



  return (
    <div className='logo'>
      <img src={carrito} alt='carrito'/>
      <div className='contador'>
        {contador}
      </div>
    </div>
  )
}

export default CartWidget