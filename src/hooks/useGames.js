import { useEffect, useMemo, useState } from 'react'
import { GlobalProvider } from '../context/GlobalContextProvider'
import * as  gamesService from '../services/gamesService'

//Custom hook para devolver todos los juegos con o sin filtros
export const useGames = ({ categoryId }) => {
  const [games, setGames] = useState([])
  const { setLoading, search } = GlobalProvider()

  useEffect(() => {
    setLoading(true)
    gamesService.getAllGames().then((games) => {
      setGames(games)
      setLoading(false)
    })
  }, [setLoading])

  const filterGames = useMemo(() => {
    const gamesWitCategory = categoryId ? games.filter((game) => game.category === Number(categoryId)) : games
    return gamesWitCategory.filter((game) => {
      return game.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    })
  }, [categoryId, games, search])


  return { games: filterGames }
}

