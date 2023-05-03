import React from 'react'
import { Helmet } from 'react-helmet'
import ItemDetailContainer from '../../components/item-detail-container/ItemDetailContainer'
import './game-info.css'

const GameInfo = () => {
  
  return (
    <main className='parent'>
      <Helmet>
        <title>Detalles</title>
      </Helmet>
      <ItemDetailContainer />
    </main>
  )
}
export default GameInfo



