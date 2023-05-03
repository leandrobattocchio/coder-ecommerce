import { useState } from "react"

const usePagination = ({ games, MAX_PER_PAGE }) => {

    const [page, setPage] = useState(1)
    const [pagination, setPagination] = useState([])

    const handlePrev = () => {

        if ((page - 1) === 1) {
            let prevGames = games.slice(0, 9)
            setPagination(prevGames)
        }

        if ((page - 1) > 1) {
            let prevGames = games.slice(0, (MAX_PER_PAGE * (page - 1)))
            let reverseGames = prevGames.reverse()
            let newPrevGames = reverseGames.slice(0, 9)

            setPagination(newPrevGames)
        }

        setPage(prevState => prevState - 1)
    }

    const handleNext = () => {

        if ((page + 1) * MAX_PER_PAGE > games.length) {
            let nextGames = [...games]
            let reverseGames = nextGames.reverse()
            let finalGames = reverseGames.slice(0, (games.length - (page * MAX_PER_PAGE)))

            setPagination(finalGames)
        }

        if ((page + 1) * MAX_PER_PAGE <= games.length) {
            let nextGames = games.slice(0, (MAX_PER_PAGE * (page + 1)))
            let reverseGames = nextGames.reverse()
            let newNextGames = reverseGames.slice(0, 9)

            setPagination(newNextGames)
        }

        setPage(prevState => prevState + 1)
    }

    const firstPerPage = () => {
        let perGames = games.slice(0, 9)
        setPagination(perGames)
    }

    return { pagination, handlePrev, handleNext, firstPerPage, page }
}

export default usePagination