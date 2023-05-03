import { useEffect, useState } from 'react'
import { GlobalProvider } from '../context/GlobalContextProvider'
import { findById } from '../services/gamesService'

//Hook personalizado para traer el juego pasado por id
const useGame = (gameId) => {

  const [game, setGame] = useState()
  const { setLoading } = GlobalProvider()

  const handleChangeStash = (compra) => {
    setGame((prevState) => {
      return {
        ...prevState,
        stash: game.stash - compra
      }
    })
  }

  useEffect(() => {
    setLoading(true)
    findById(gameId).then((game) => {
      setGame(game)
      setLoading(false)

    })
  }, [gameId, setLoading])

  return { game, handleChangeStash }
}

export default useGame

