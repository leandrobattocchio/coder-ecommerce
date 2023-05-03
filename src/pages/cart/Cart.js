import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CartList from '../../components/cart-list/CartList'
import { GlobalProvider } from '../../context/GlobalContextProvider'
import Modal from '../../components/modal/Modal'
import { Helmet } from 'react-helmet'


const Cart = () => {
  const { logged } = GlobalProvider()
  const navigate = useNavigate()

  useEffect(() => {
    if (!logged) {
      navigate('/')
    }
  }, [logged, navigate])

  return (
    <>
      <Helmet>
        <title>Carrito</title>
      </Helmet>
      <main className='parent'>
        <Modal />
        <CartList />
      </main>
    </>

  )
}

export default Cart