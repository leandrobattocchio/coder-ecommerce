import { db } from '../firebase'
import { updateDoc, doc, addDoc, collection } from 'firebase/firestore'
import { findUserByEmail } from './userService'

//Funcion para devolver el carrito de un usuario
export const findCart = async (email) => {
    const user = await findUserByEmail(email)

    if (user.length === 0) return null
    return user.data().cart
}
//Funcion para actualizar el carrito de un usuario
export const addPurchase = async (compra, email) => {
    const user = await findUserByEmail(email)
    const userId = user.id
    const userCart = user.data().cart
    const isRepeat = userCart.some((c) => c.game.id === compra.game.id)
    let updatedCart = []

    if (isRepeat) {
        userCart.forEach((c) => {
            if (c.game.id === compra.game.id) {
                updatedCart.push({
                    ...c,
                    cantidad: c.cantidad + compra.cantidad
                })
            } else {
                updatedCart.push(c)
            }
        })
    } else {
        updatedCart = userCart.concat(compra)
    }

    const orderDoc = doc(db, 'users', userId)
    updateDoc(orderDoc, { cart: updatedCart })
    return updatedCart
}
//Funcion para eliminar un juego del carrito
export const deleteGameFromCart = async (email, purchaseId) => {
    const user = await findUserByEmail(email)
    const userId = user.id
    const cart = user.data().cart
    const updatedCart = cart.filter((purchase) => purchase.id !== purchaseId)
    const orderDoc = doc(db, 'users', userId)
    updateDoc(orderDoc, { cart: updatedCart })
}
//Funcion para eliminar todos los juegos del carrito
export const clearAllCart = async (email) => {
    const user = await findUserByEmail(email)
    const orderDoc = doc(db, 'users', user.id)
    updateDoc(orderDoc, { cart: [] })
}
//Funcion para dejar historial de compra en la db
export const addBuyToPurchases = async (email, compra) => {
    let total = 0
    compra.forEach(c => {
        total += c.cantidad * c.game.price
    });
    const user = await findUserByEmail(email)
    await addDoc(collection(db, 'purchases'), {
        buyer: {
            name: user.data().name,
            phone: user.data().phone,
            email
        },
        items:{
            compras: compra,
            date: new Date(),
            total
        }
    })
}