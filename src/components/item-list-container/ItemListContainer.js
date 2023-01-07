import React from 'react'
import './itemListContainer.css'
import { Link } from 'react-router-dom'
import { useGames } from '../../hooks/useGames'
import Error from '../error/Error'

const ItemListContainer = () => {
  
  const { games, loading } = useGames()

  if (loading) {
    return <></>
  } else {
    if (games.length !== 0) {
      return (
        <>
          <main className='section-main'>
            <div className='album py-5 pepito'>
              <div className='container'>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                  {games.map(game => (
                    <div key={game.id} className='col'>
                      <div className='card shadow-sm'>
                        <img className="bd-placeholder-img card-img-top" src={game.img} alt={game.name} />
                        <div className='card-body'>
                          <b className='card-text'>{game.name}</b>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className='btn-group'>
                              <Link to={`/item/${game.id}`}>
                                <button className='btn btn-sm btn-outline-secondary'>Ver detalles</button>
                              </Link>
                            </div>
                            <small className='text-muted'>19.99$</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </> 
      )
    } else {
      return (
        <Error />
      )
    }
  }
}

export default ItemListContainer