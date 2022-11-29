import React from 'react'
import './itemListContainer.css'

const ItemListContainer = ( { children, greeting }) => {
  return (
    <div className='item-list'>
        <h1>Bienvenido {greeting}</h1>
        {children}
    </div>
  )
}

export default ItemListContainer