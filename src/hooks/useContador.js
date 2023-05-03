import { useState } from "react"
import { CarritoProvider } from '../context/CarritoContextProvider'
import { purchaseGame } from "../services/gamesService"
import nextId from 'react-id-generator'
import useToggle from "./useToggle"

const useContador = ({ changeStash, game }) => {

    const { addToCart } = CarritoProvider()
    const [compra, setCompra] = useState(1)
    const { toggle, handleToggle } = useToggle()

    const handleSuma = () => {
        if (game.stash > compra) setCompra(prevState => prevState + 1)
    }

    const handleResta = () => {
        if (compra !== 1 && compra > 1) setCompra(prevState => prevState - 1)
    }

    const handlePurchase = () => {
        const id = nextId() + (Math.random() * 100)
        handleToggle()

        if (game.stash >= compra) {
            purchaseGame(game, compra).then(() => {
                setCompra(1)
                changeStash(compra)
                addToCart({ id: id, game: { ...game, stash: game.stash - compra }, cantidad: compra })
                setTimeout(() => {
                    handleToggle()
                }, 400)
            }).catch((e) => {
                console.log(e)
                handleToggle()
            })
        } else {
            console.error('No hay unidades disponibles!')
            handleToggle()
        }
    }

    return { handleSuma, handleResta, handlePurchase, compra, toggle }
}

export default useContador

