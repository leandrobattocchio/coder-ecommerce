import React from 'react'
import { Link } from 'react-router-dom'
import { GlobalProvider } from '../../context/GlobalContextProvider'
import logoUser from '../../images/logo-user.webp'
import './user-drop-icon.css'

const UserDropIcon = () => {

    const { userLogout } = GlobalProvider()

    return (
        <div className="p-2">
            <a href="/#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={logoUser} alt="mdo" width="33" height="33" className="rounded-circle" />
            </a>
            <ul className="dropdown-menu text-small shadow">
                <li><Link className="user-drop-link dropdown-item" to={'/user-info'}>Perfil</Link></li>
                <li><button className="user-drop-link dropdown-item" onClick={userLogout}>Salir</button></li>
            </ul>
        </div>
    )
}

export default UserDropIcon