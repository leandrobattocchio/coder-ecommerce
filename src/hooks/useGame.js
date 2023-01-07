import { useEffect, useState, useContext } from 'react'
import { CarritoContext } from '../context/CarritoContextProvider'
import { findById, updateGame } from '../services/gamesService'
import { useParams } from 'react-router-dom'

const useGame = () => {

    const { gameId } = useParams()
    const [game, setGame] = useState()
    const [compra, setCompra] = useState(1)
    const {setCarrito} = useContext(CarritoContext)
    const [loading, setLoading] = useState(true)

    const handleSuma = (event) => {
      if(game.stash > compra ) setCompra(prevState => prevState + 1)
    }
  
    const handleResta = () => {
      if(compra !== 1 && compra > 1) setCompra(prevState => prevState - 1)
    }
  
    const handleCarrito = () => {
     if(game.stash >= compra){
      updateGame(game, compra).then(()=>{
        setCarrito(prevState => prevState + compra)
        setCompra(1)
        setGame((prevState) => {
          return {
            ...prevState,
            stash: game.stash - compra
          }
        })
      }).catch((e)=> console.log(e))
     }else{
      console.error('No hay unidades disponibles!')
     }
    }
 
    useEffect(() => {
        findById(gameId).then((game)=>{
         setGame(game)
         setLoading(false)
        })
      }, [gameId])
    
    return { game, setGame, handleSuma, handleResta, handleCarrito, compra, loading }
}

export default useGame