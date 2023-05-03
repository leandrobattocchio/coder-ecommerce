import React  from 'react'
import CardGame from '../card-game/CardGame'
import kirby from '../../images/kirby.gif'
import { GlobalProvider } from '../../context/GlobalContextProvider'
import Pagination from '../pagination/Pagination'
import './item-list.css'

const ItemList = ({ games }) => {

  const MAX_PER_PAGE = 9
  const { search } = GlobalProvider()

  //Si hay menos juegos que capacidad por pagina se renderiza todo sin paginacion
  if (games && !(games.length < 1) && games.length < MAX_PER_PAGE) {
    return <div className='album py-5'>
      <div className='container'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
          {games.map((game, index) => (
            <CardGame game={game} key={index} />
          ))}
        </div>
      </div>
    </div>
  }

  //Si hay mas juegos que capacidad por pagina, se pagina lo que se pueda
  if (games && games.length > MAX_PER_PAGE) {
    return <Pagination games={games} max={MAX_PER_PAGE}/>
  }

  //Si se intento buscar por el search y no se encontro nada se muestra este
  if (games && (games.length < 1) && search !== '') {
    return <>
      <h1 className='item-list-not-found-title display-2'>¡Sin resultados!</h1>
      <img className="kirby-gif img-fluid" src={kirby} alt="kirby-gif" />
    </>
  }

}

export default ItemList