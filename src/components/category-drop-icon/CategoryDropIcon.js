import React from 'react'
import { Link } from 'react-router-dom'
import category from '../../images/category.webp'
import './category-drop-icon.css'

const UserDropIcon = () => {

    const CATEGORIAS = [
        { text: 'General', to: '/' },
        { text: 'Accion', to: '/category/1' },
        { text: 'Terror', to: '/category/2' },
        { text: 'Aventura', to: '/category/3' }
    ]

    return (
        <div className="p-2">
            <a href="/#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={category} alt="mdo" width="33" height="33" className="rounded-circle" />
            </a>
            <ul className="dropdown-menu text-small shadow">
                {CATEGORIAS.map((category, index) => {
                    return (
                        <li key={index}>
                            <Link className="category-drop-link dropdown-item" to={category.to}>{category.text}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default UserDropIcon

