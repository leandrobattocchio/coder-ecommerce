import React from 'react'
import './itemListContainer.css'
import { Link, useParams } from 'react-router-dom'
import  {useGames}  from '../../hooks/useGames'

const ItemListContainer = () => {
  const {categoryId} = useParams()
  const { games } = useGames(categoryId)
 

  return (
    <div className='album py-5 bg-dark'>
      <div className='container'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
          {games.map(game => (
            <div key={game.id} className='col'>
              <Link to={`/item/${game.id}`}>
                <h1>{game.name}</h1>
                <img src={game.img} alt={game.name}/>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer