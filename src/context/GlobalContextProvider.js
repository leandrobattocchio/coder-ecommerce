import { onAuthStateChanged } from 'firebase/auth'
import React, { createContext, useEffect, useState, useContext } from 'react'
import { logoutUser } from '../services/userService'
import { auth } from '../firebase'

const GlobalContext = createContext('')

export const GlobalProvider = () => useContext(GlobalContext)

export const GlobalContextProvider = ({ children }) => {
  const [logged, setLogged] = useState(false)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [modal, setModal] = useState(false)
  const [alerta, setAlerta] = useState(false)

  const mostrarAlerta = (type, text) => {
    setAlerta({ type, text })
    setTimeout(() => {
      setAlerta(false)
    }, 3000)
  }

  const userLogout = async () => {
    logoutUser()
      .then(() => {
        setLogged(false)
      })
      .catch((e)=>console.log(e))
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleModal = () => {
    setModal(prevState => !prevState)
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (!user.emailVerified) return setLogged(false)
        setLogged(user)
      } else {
        setLogged(false)
      }
    });
  }, [])

  return (
    <GlobalContext.Provider value={{ logged, setLogged, userLogout, loading, setLoading, search, handleSearch, modal, handleModal, mostrarAlerta, alerta }}>
      {children}
    </GlobalContext.Provider>
  )
}
