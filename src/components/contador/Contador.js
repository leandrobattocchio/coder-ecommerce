import React from 'react'
import { GlobalProvider } from '../../context/GlobalContextProvider'
import useContador from '../../hooks/useContador'
import './contador.css'

const Contador = ({ game, changeStash }) => {

    const { handleSuma, handleResta, handlePurchase, compra, toggle } = useContador({ changeStash, game })
    const { logged } = GlobalProvider()

    return (
        <div className="contador-patern col-md-6">
            {logged
                ?
                (<div className='contador-child'>
                    <h3>Stock: {game?.stash}</h3>
                    <div className="contador-compra card-header">
                        <h4 className="my-0 font-weight-normal">{compra}</h4>
                    </div>
                    <button onClick={handleResta} className="contador-buttons btn btn-secondary">-</button>
                    <button onClick={handleSuma} className="contador-buttons btn btn-secondary">+</button>
                    <button onClick={handlePurchase} className='btn btn-success' disabled={!toggle}>Agregar al carrito</button>
                </div>)
                : (<div className='contador-logout'>Debes loguearte para agregar al carrito</div>)
            }
        </div>
    )
}

export default Contador