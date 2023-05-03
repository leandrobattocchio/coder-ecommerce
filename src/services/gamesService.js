import { db } from '../firebase'
import { collection, documentId, getDocs, query, where, updateDoc, doc } from 'firebase/firestore'

//Funcion para devolver todos los juegos
export const getAllGames = async () => {
    let games = []
    const gamesCollection = collection(db, 'games')
    const snapshot = await getDocs(gamesCollection)

    snapshot.docs.map((doc) => games.push(({ id: doc.id, ...doc.data() })))
    return games
}
//Funcion para traer juegos filtrados por categoria
export const filterCategory = async (categoryId) => {
    let games = []
    const queryFilter = query(
        collection(db, 'games'),
        where("category", "==", parseInt(categoryId))
    )
    const snapshot = await getDocs(queryFilter)

    snapshot.docs.map((doc) => games.push(({ id: doc.id, ...doc.data() })))
    return games
}
//Funcion para traer un juego por id
export const findById = async (gameId) => {
    const queryFilter = query(
        collection(db, 'games'),
        where(documentId(), "==", gameId)
    )
    const snapshot = await getDocs(queryFilter)

    if (snapshot.docs.length === 0) return null
    return ({
        id: snapshot.docs[0].id,
        ...snapshot.docs[0].data()
    })
}
//Funcion para modificar un juego
export const purchaseGame = async (game, compra) => {
    const orderDoc = doc(db, 'games', game.id)
    updateDoc(orderDoc, { stash: game.stash - compra })
}
//Funcion para devolver el stash a un game si la compra se cancela
export const refillGame = async (game, cantidad) => {
    const queryFilter = query(
        collection(db, 'games'),
        where(documentId(), "==", game.id)
    )
    const snapshot = await getDocs(queryFilter)
    const gameStash = snapshot.docs[0].data().stash
    const orderDoc = doc(db, 'games', game.id)
    updateDoc(orderDoc, { stash: gameStash + cantidad })
}