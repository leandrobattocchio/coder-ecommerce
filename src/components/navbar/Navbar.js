import React from 'react'
import CartWidget from '../cart-widget/CartWidget'
import UserDropIcon from '../user-drop-icon/UserDropIcon'
import { Link } from 'react-router-dom'
import { GlobalProvider } from '../../context/GlobalContextProvider'
import CategoryDropIcon from '../category-drop-icon/CategoryDropIcon'
import logo from '../../images/logo.webp'
import './navbar.css'

const Navbar = () => {

    const { logged } = GlobalProvider()

    return (
        <header className="py-3 border-bottom header" style={{ backgroundColor: 'rgb(220, 220, 220)' }}>
            <div className="container-fluid d-grid gap-3 align-items-center" style={{ gridTemplateColumns: '1fr 2fr' }}>
                <div>
                    <Link className="company-logo dropdown" to={'./'}>
                        <img className="rounded-circle" src={logo} alt='company-logo' />
                    </Link>
                </div>
                {logged
                    ? (<div className="d-flex flex-row-reverse">
                        <UserDropIcon />
                        <CategoryDropIcon />
                        <CartWidget />
                    </div>)
                    : (
                        <div className="login-buttons d-flex flex-row-reverse">
                            <CategoryDropIcon />
                            <Link type="button" to={'/login'} className="btn btn-light">Login</Link>
                            <Link type="button" to={'/register'} className="btn btn-light">Registro</Link>
                        </div>
                    )
                }
            </div>
        </header>
    )
}

export default Navbar                        
