import React from 'react'
import './itemListContainer.css'
import { useGames } from '../../hooks/useGames'
import ItemList from '../item-list/ItemList'
import Buscador from '../buscador/Buscador'

//Componente encargado de renderizar una lista de juegos, ya sea filtrada o completa
const ItemListContainer = ({ categoryId }) => {

  const { games } = useGames({ categoryId })

  return (
    <>
      <Buscador />
      <ItemList games={games} />
    </>
  )
}

export default ItemListContainer