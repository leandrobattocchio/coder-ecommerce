import React from 'react'
import useGame from '../../hooks/useGame'
import { useParams } from 'react-router-dom'
import Contador from '../contador/Contador'
import kirby from '../../images/kirby.gif'
import './item-detail.css'

const ItemDetail = () => {
  const { gameId } = useParams()
  const { game, handleChangeStash } = useGame(gameId)

  if (game) {
    return (
      <>
        <div className="row mb-2 ">
          <div className="col-md-6"  style={{position: 'relative', display: 'inline-block'}}>
            <img src={game?.img} alt={game?.name} className="game-detail-img img-fluid"></img>
            <div className='game-price'>{game.price} $</div>
          </div>
          <Contador game={game} changeStash={handleChangeStash}/>
        </div>
        <div className="game-info p-4 p-md-5 mb-4 rounded">
          <div className="col-md-6 px-0">
            <h1 className="display-4 fst-italic">{game?.name}</h1>
            <p className="lead my-3">{game?.description}</p>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <h1 className='item-list-not-found-title display-2'>JUEGO NO ENCONTRADO</h1>
        <img className='kirby-gif img-fluid' src={kirby} alt='not-found'/>
      </>
    )
  }
}

export default ItemDetail