import React from 'react'
import Alerta from '../components/alerta/Alerta'
import Spinner from '../components/spinner/Spinner'

const Layout = ({ children }) => {

    return (
        <>
            <Alerta />
            <Spinner />
            {children}
        </>
    )
}

export default Layout