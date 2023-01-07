import { useEffect, useState } from 'react'
import * as  gamesService from '../services/gamesService'
import { useParams } from 'react-router-dom'

export const useGames = () => {
  const[games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {
    if(categoryId){
        gamesService.filterCategory(categoryId).then((games) =>{
            setGames(games)
            setLoading(false)
        })
    }else{
        gamesService.getAllGames().then((games) => {
            setGames(games)
            setLoading(false)
       })
    }
  }, [categoryId])
  
  return {games, loading}
}

