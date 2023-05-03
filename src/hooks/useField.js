import { useState } from 'react'

//Componente encargado de devolver un input con state, type, placeholder y label personalizado
export const useField = ({ type, placeholder = '', label, initialValue = '' }) => {
  const [value, setValue] = useState(initialValue)

  const onChange = event => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    label,
    placeholder,
    onChange
  }
}
