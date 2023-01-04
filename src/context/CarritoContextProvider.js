import React, { createContext, useState } from 'react'


export const CarritoContext = createContext('')

export const CarritoContextProvider = ({children}) => {


  const [carrito, setCarrito] = useState(0)
return (
    <CarritoContext.Provider value={{carrito, setCarrito}}>{children}</CarritoContext.Provider>
  )
}
