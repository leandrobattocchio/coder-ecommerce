import React, { useState } from 'react'
import { CarritoProvider } from '../../context/CarritoContextProvider'
import { deleteGameFromCart } from '../../services/carritoService'
import { refillGame } from '../../services/gamesService'
import './cart-row.css'

const CartRow = ({ compra, user }) => {

    const { deleteGamePurchase } = CarritoProvider()
    const [disabled, setDisabled] = useState(false)

    const handleDelete = () => {
        setDisabled({ disabled: true })
        deleteGameFromCart(user.email, compra.id)
            .then(() => {
                refillGame(compra.game, compra.cantidad)
                    .then(() => {
                        deleteGamePurchase(compra.id)
                        setDisabled({ disabled: false })
                        console.log('Compra borrada y stock repuesto!')
                    })
            })
    }

    return (
        <div className="d-flex text-muted pt-3" key={compra.game.id}>
            <div className='carrito-img-contenedor'>
                <img className='img-carrito img-fluid' src={compra.game.img} alt={`${compra.game.name} img`} />
                <div className='carrito-game-cantidad'>{compra.cantidad}</div>
            </div>
            <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                <div className='cart-game-delete '>
                    <button onClick={handleDelete} {...disabled}>x</button>
                </div>
                <div className="name-game">
                    <strong>{compra.game.name.toUpperCase()}</strong>
                </div>
                <span className="game-price-cart d-block">{compra.game.price * compra.cantidad}$</span>
            </div>
        </div>
    )
}

export default CartRow