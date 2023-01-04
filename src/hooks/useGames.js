import { useEffect, useState } from 'react'
import * as  gamesService from '../services/gamesService'

export const useGames = (categoryId) => {
  const[games, setGames] = useState([])
  
  useEffect(() => {
    if(categoryId){
        gamesService.filterCategory(categoryId).then((games) =>{
            setGames(games)
        })
    }else{
        gamesService.getAllGames().then((games) => {
            setGames(games)
       })
    }
  }, [categoryId])
  
  return {games}
}

