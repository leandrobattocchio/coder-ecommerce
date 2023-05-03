import React from 'react'
import CartRow from '../cart-row/CartRow'
import Checkout from '../checkout/Checkout'
import { CarritoProvider } from '../../context/CarritoContextProvider'
import { GlobalProvider } from '../../context/GlobalContextProvider'
import { totalPurchaseCart } from '../../helpers/carritoHelper'
import carritoVacio from '../../images/carrito-vacio.webp'
import './cart-list.css'

const CartList = () => {

    const { logged } = GlobalProvider()
    const { carrito } = CarritoProvider()
    let total = 0

    return (
        <>
            {carrito.length === 0
                ? (
                    <>
                        <h1 className='cart-empty-title display-2'>¡Tu carrito esta vacio!</h1>
                        <img src={carritoVacio} alt='carrito-vacio' className='cart-empty-img img-fluid' />
                    </>
                )
                : (
                    <div className='cart-list-parent'>
                        <div className="cart-list-children-1">
                            {carrito.map((compra, index) => {
                                total += totalPurchaseCart(compra)
                                return <CartRow compra={compra} user={logged} key={index} />
                            })}
                        </div>
                        <Checkout total={total} />
                    </div>
                )
            }
        </>
    )
}

export default CartList