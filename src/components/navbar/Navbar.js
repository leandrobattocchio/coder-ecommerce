import React, { useContext } from 'react'
import CartWidget from '../cart-widget/CartWidget'
import { Link } from 'react-router-dom'
import './navbar.css'
import {auth} from '../../firebase'
import { signOut  } from "firebase/auth";
import { CarritoContext } from '../../context/CarritoContextProvider'

const Navbar = () => {

    const {logged} = useContext(CarritoContext)
 
    const handleLogout = () => {
        signOut(auth).then(() => {
            console.log('Usuario deslogueado con exito!')
          }).catch((error) => {
            console.log(error.message)
          });
    }

    return (
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow section-coral">
            <CartWidget />
            <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" to={'/'}>¡Bienvenido/a!</Link>
           
            <input className="search form-control form-control-dark w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search" />
                <div className="navbar-nav">
                    <div name='top' className="nav-item text-nowrap">
                        {logged
                        ? <button onClick={handleLogout} className='btn btn-secondary'>Logout</button>
                        : <Link className="nav-link px-3" to={'/authentication'}>Sign in</Link>
                        }
                    </div>
                </div>
        </header>
    )
}

export default Navbar