import { useEffect, useState } from 'react'
import { findById } from '../services/gamesService'

const useGame = (gameId) => {
    const [game, setGame] = useState()

    useEffect(() => {
        findById(gameId).then((game)=>{
         setGame(game)
        })
      }, [gameId])
    
    return { game, setGame }
}

export default useGame