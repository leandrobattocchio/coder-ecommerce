import React from 'react'
import { GlobalProvider } from '../../context/GlobalContextProvider'
import './alerta.css'

const Alerta = () => {

    const { alerta } = GlobalProvider()
    const rol = alerta
        ? alerta.type === 'success'
            ? 'alert alert-success alerta-green-red'
            : 'alert alert-danger alerta-green-red'
        : null


    return (
        alerta && (
            <div className={rol} role="alert">
                {alerta.text}
            </div>
        )
    )
}

export default Alerta