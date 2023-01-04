import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import './itemDetailConteiner.css'
import { CarritoContext } from '../../context/CarritoContextProvider'
import useGame from '../../hooks/useGame'

export const ItemDetailConteiner = () => {

  const { gameId } = useParams()
  const [compra, setCompra] = useState(1)
  const {setCarrito} = useContext(CarritoContext)
  const { game, setGame } = useGame(gameId)
  
  const handleSuma = (event) => {
    if(game.stash > compra ) setCompra(prevState => prevState + 1)
  }

  const handleResta = () => {
    if(compra !== 1 && compra > 1) setCompra(prevState => prevState - 1)
  }

  const handleCarrito = () => {
   if(game.stash >= compra){
    setCarrito(prevState => prevState + compra)
    setCompra(1)
    setGame((prevState) => {
      return {
        ...prevState,
        stash: game.stash - compra
      }
    })
   }
  }

  if (game) {
    return (
      <div className='juego'>
        <h1>{game.name}</h1>
        <img src={game.img} alt={game.name}></img>
        <div className='hud'>
          <div className='compras'>{compra}</div>
          <button onClick={handleResta}>-</button>
          <button onClick={handleSuma}>+</button>
        </div>
        <button onClick={handleCarrito}>Agregar al carrito</button>
        <h3>Stash:{game.stash}</h3>
        <h2 className='descripcion'>Descripcion</h2>
        <p>{game.description}</p>
      </div>
    )
  } else {
    return <h1>Juego no encontrado</h1>
  }
}
