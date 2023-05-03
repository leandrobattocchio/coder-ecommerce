import { useState } from 'react'

const useToggle = () => {
  const [toggle, setToggle] = useState(true)

  const handleToggle = () => {
    setToggle(prevState => !prevState)
  }

  return {
    toggle,
    handleToggle
  }
}

export default useToggle