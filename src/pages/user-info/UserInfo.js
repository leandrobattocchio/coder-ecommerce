import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalProvider } from '../../context/GlobalContextProvider'
import { findUserByEmail } from '../../services/userService'
import UserInfoDetail from '../../components/user-info-detail/UserInfoDetail'
import { Helmet } from 'react-helmet'

const UserInfo = () => {

  const { logged, loading, setLoading } = GlobalProvider()
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (!logged) navigate('/')
    setLoading(true)
    findUserByEmail(logged.email)
      .then((userInfo) => {
        setUser(userInfo.data())
        setLoading(false)
      })
    // eslint-disable-next-line
  }, [logged, navigate])

  return (
    (!loading && user !== null) && (
      <div className='parent'>
        <Helmet>
          <title>Perfil</title>
        </Helmet>
        <UserInfoDetail user={user} />
      </div>
    )
  )
}

export default UserInfo