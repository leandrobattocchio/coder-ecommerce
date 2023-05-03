import React from 'react'
import { Helmet } from 'react-helmet'
import ItemListContainer from '../../components/item-list-container/ItemListContainer'

//Pagina de inicio
const Home = () => {
    
    return (
        <main className='parent'>
            <Helmet>
                <title>Inicio</title>
            </Helmet>
            <div className='section-main'>
                <ItemListContainer />
            </div>
        </main>
    )
}

export default Home

