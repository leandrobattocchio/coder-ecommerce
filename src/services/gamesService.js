import { db } from '../firebase'
import { collection, documentId, getDocs, query, where, updateDoc, doc } from 'firebase/firestore'


export const getAllGames = async () => {
    let games = []
    const gamesCollection = collection(db, 'games')
    const snapshot = await getDocs(gamesCollection)

    snapshot.docs.map((doc) => games.push(({id: doc.id, ...doc.data()})))
    return games
}

export const filterCategory = async (categoryId) => {
    let games = []
    const queryFilter = query(
        collection(db, 'games'), 
        where("category", "==", parseInt(categoryId))
    )
    const snapshot = await getDocs(queryFilter)

    snapshot.docs.map((doc) => games.push(({id: doc.id, ...doc.data()})))
    return games
}

export const findById = async (gameId) => {
    const queryFilter = query(
        collection(db, 'games'), 
        where(documentId(), "==", gameId)
    )
    const snapshot = await getDocs(queryFilter)
   
    if(snapshot.docs.length === 0) return null
    return ({
        id: snapshot.docs[0].id,
        ...snapshot.docs[0].data()
    })
}

export const updateGame = async (game, compra) => {
  const orderDoc = doc(db, 'games', game.id)
  updateDoc(orderDoc, {stash: game.stash - compra})
}