import React from 'react'
import { GlobalProvider } from '../../context/GlobalContextProvider'
import { useField } from '../../hooks/useField'
import carritoPurchase from '../../images/carrito-purchase.webp'

const Checkout = ({ total }) => {
    const name = useField({ type: 'text', placeholder: 'Nombre...' })
    const lastName = useField({ type: 'text', placeholder: 'Apellido...' })
    const cardNumber = useField({ type: 'number', placeholder: 'Numero de tarjeta...' })
    const securityNumber = useField({ type: 'number', placeholder: 'Cod. de seguridad...' })
    const cardDate = useField({ type: 'month', placeholder: 'Fecha de expiracion...' })
    const INPUTS = [name, lastName, cardNumber]
    const { handleModal } = GlobalProvider()

    const handlePurchase = (e) => {
        e.preventDefault()
        handleModal()
    }

    return (
        <div className='cart-list-children-2'>
            <img className='img-fluid' src={carritoPurchase} alt='cart img' />
            <form onSubmit={handlePurchase}>
                {INPUTS.map((i, index) => {
                    return (
                        <div className="form-group" key={index}>
                            <input {...i} className="form-control" required />
                        </div>
                    )
                })}
                <div className="form-group" id='security-number'>
                    <input {...securityNumber} className="form-control" required />
                </div>
                <div className="form-group" id='card-date'>
                    <input {...cardDate} className="form-control" required />
                </div>
                <button className='btn btn-success' href='#top' style={{ float: 'left', marginTop: '12px' }}>Comprar</button>
            </form>
            <small className="d-block text-end mt-3">
                <h4>Total: {total.toFixed(2)}$</h4>
            </small>
        </div>
    )
}

export default Checkout