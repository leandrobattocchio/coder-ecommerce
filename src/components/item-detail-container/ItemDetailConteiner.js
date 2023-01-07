import React  from 'react'
import './itemDetailConteiner.css'
import useGame from '../../hooks/useGame'

export const ItemDetailConteiner = () => {
  const { game, handleCarrito, handleSuma, handleResta, compra, loading } = useGame()
  
  if(loading){
    return <></>
  }else{
    if (game !== null ) {
      return (
        <>
          <main className='section-game'>
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
          </main>
        </>
      )
    } else {
      return <h1 style={{color: 'white'}}>Juego no encontrado</h1>
    }
  }
}
