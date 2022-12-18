import React, { useEffect, useState } from 'react'
import './itemListContainer.css'
import { Link, useParams } from 'react-router-dom'

const ItemListContainer = ({games}) => {

  const {categoryId} = useParams()
  const [gamesFilter, setGames] = useState([])

  useEffect(() => {
    if(categoryId) {
      const filter = games.filter(game => game.category === parseInt(categoryId))
      setGames(filter)
    }else{
      setGames(games)
    }
  }, [categoryId, games])
  
  return (
    <div className='album py-5 bg-dark'>
      <div className='container'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
          {gamesFilter.map(game => (
            <div className='col'>
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