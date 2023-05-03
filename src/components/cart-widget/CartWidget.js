import React, { useEffect, useState } from 'react'
import './cartWidget.css'
import carritoImg from '../../images/carrito.webp'
import { Link } from 'react-router-dom'
import { CarritoProvider } from '../../context/CarritoContextProvider'

const CartWidget = () => {

  const { carrito } = CarritoProvider()
  const [cantidad, setCantidad] = useState(0)

  useEffect(() => {
    let juegos = 0
    carrito.map((compra) => {
      return juegos += compra.cantidad
    })
    setCantidad(juegos)
  }, [carrito])

  return (
    <div className="p-2">
      <Link className="carrito-icon d-block link-dark text-decoration-none" to={'/cart-widget'}>
        <b style={{ marginRight: '2px' }}>{cantidad}</b>
        <img src={carritoImg} alt="mdo" className="rounded-circle" />
      </Link>
    </div>
  )
}

export default CartWidget