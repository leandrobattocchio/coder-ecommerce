import { GlobalProvider } from "../context/GlobalContextProvider"
import { restorePassword, updateUser } from "../services/userService"
import { useField } from "./useField"
import useToggle from "./useToggle"

const useUserDetail = ({ user }) => {
    const name = useField({ type: 'text', label: 'Nombre', initialValue: user.name })
    const lastName = useField({ type: 'text', label: 'Apellido', initialValue: user.lastName })
    const phone = useField({ type: 'number', label: 'Telefono celular', initialValue: user.phone })
    const { mostrarAlerta, logged } = GlobalProvider()
    const { toggle, handleToggle } = useToggle()

    const handleSave = (e) => {
        e.preventDefault()
        handleToggle()
        setTimeout(() => {
            updateUser(e.target[0].value, e.target[1].value, e.target[2].value, logged.email)
                .then((respuesta) => {
                    mostrarAlerta(respuesta.type, respuesta.text)
                })
        }, 600)
    }

    const handleEdit = () => {
        handleToggle()
    }

    const handlePassword = () => {
        restorePassword(logged.email)
            .then((respuesta) => {
                mostrarAlerta(respuesta.type, respuesta.text)
            })
    }

    return { handleSave, handleEdit, handlePassword, name, lastName, phone, toggle }
}

export default useUserDetail