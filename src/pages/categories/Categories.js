import React from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import ItemListContainer from '../../components/item-list-container/ItemListContainer'

//Pagina de juegos filtrados por categorias
const Categories = () => {

  const { categoryId } = useParams()

  return (
    <main className='parent'>
      <Helmet>
        <title>Categorias</title>
      </Helmet>
      <div className='section-main'>
        <ItemListContainer categoryId={categoryId} />
      </div>
    </main>
  )
}
export default Categories