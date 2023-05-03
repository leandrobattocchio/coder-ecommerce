import { useField } from './useField'
import { loginUser } from '../services/userService'
import useToggle from './useToggle'
import { GlobalProvider } from '../context/GlobalContextProvider'

const useLogin = () => {

  const { mostrarAlerta, setLogged } = GlobalProvider()
  const { toggle, handleToggle } = useToggle()
  const email = useField({ type: 'text', placeholder: 'Enter email...', label: 'Email' })
  const password = useField({ type: 'password', placeholder: 'Enter password...', label: 'Password' })

  const handleLogin = (e) => {
    e.preventDefault()
    handleToggle()
    setTimeout(() => {
      loginUser(email.value, password.value).then((respuesta) => {
        handleToggle()
        if(respuesta.type === 'success') setLogged({email: email.value})
        mostrarAlerta(respuesta.type, respuesta.text)
      })
    }, 600)
  }

  return { email, password, handleLogin, toggle }
}

export default useLogin