import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './itemDetailConteiner.css'

export const ItemDetailConteiner = ({games}) => {

  const {itemId} = useParams()   
  const [game, setGame] = useState()

    useEffect(() => {
        const game = games.find(game => game.id === itemId)
        setGame(game)
    }, [games,itemId ])
    

  if(game){
    return (
        <div className='juego'>
            <h1>{game.name}</h1>
            <img src={game.img} alt={game.name}></img>
            <h2>Descripcion</h2>
            <p>{game.description}</p>   
        </div>
    )
  }else{
    return <h1>Juego no encontrado</h1>
  }



}
