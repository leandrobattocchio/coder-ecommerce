import { db } from '../firebase'
import { collection, documentId, getDocs, query, where } from 'firebase/firestore'


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
    return snapshot.docs[0].data()
}