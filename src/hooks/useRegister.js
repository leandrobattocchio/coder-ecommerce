import { useField } from './useField'
import { registerUser } from '../services/userService'
import useToggle from './useToggle'
import { GlobalProvider } from '../context/GlobalContextProvider'

const useRegister = () => {

  const { toggle, handleToggle } = useToggle()
  const { mostrarAlerta } = GlobalProvider()
  const email = useField({ type: 'text', placeholder: 'Enter email...', label: 'Email' })
  const password = useField({ type: 'password', placeholder: 'Enter password...', label: 'Password' })
  const nombre = useField({ type: 'text', placeholder: 'Enter name...', label: 'Name' })
  const apellido = useField({ type: 'text', placeholder: 'Enter last name...', label: 'Last name' })
  const numero = useField({ type: 'number', placeholder: 'Enter a phone number...', label: 'Phone number' })

  const handleRegister = (e) => {
    e.preventDefault()
    handleToggle()
    setTimeout(() => {
      registerUser(email.value, password.value, nombre.value, apellido.value, numero.value)
        .then((respuesta) => {
          handleToggle()
          mostrarAlerta(respuesta.type, respuesta.text)
        })
    }, 600)
  }

  return { email, password, nombre, apellido, numero, handleRegister, toggle }
}

export default useRegister