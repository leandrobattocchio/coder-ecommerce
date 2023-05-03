import React from 'react'
import { Helmet } from 'react-helmet'
import notFound from '../../images/404.webp'
import './error.css'

const Error = () => {
  return (
    <div className='parent'>
      <Helmet>
        <title>Error</title>
      </Helmet>
      <h1 className='item-list-not-found-title display-2' style={{ gridColumn: '1/4' }}>Pagina no encontrada</h1>
      <img className='error-img img-fluid' src={notFound} alt='not found' style={{ gridColumn: '1/4' }} />
    </div>
  )
}

export default Error