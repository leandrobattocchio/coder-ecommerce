import React from 'react'
import CartWidget from '../cart-widget/CartWidget'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <CartWidget />
                <Link className="navbar-brand" to={'/'}>Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to={'/category/1'}>Accion</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/category/2'}>Horror</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/category/3'}>Aventura</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar