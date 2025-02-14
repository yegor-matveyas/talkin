import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'

import { Error } from '@components'
import { AuthUtils } from '@utils'

import Sidebar from './Sidebar'
import ql from './Sidebar.ql'

const LOGIN_PAGE_PATH = '/auth/login'

export default function LayoutContainer() {
  const navigate = useNavigate()

  const [logout, { loading: logoutLoading, error: logoutError }] = useMutation(ql.logout)

  const handleLogout = async () => {
    const result = await logout()
    if (result) {
      AuthUtils.deleteAccessToken()
      navigate(LOGIN_PAGE_PATH)
    }
  }

  useEffect(() => {
    if (!AuthUtils.isAuthenticated()) {
      navigate(LOGIN_PAGE_PATH, { replace: true })
    }
  }, [navigate])

  const error = logoutError
  if (error) {
    return <Error error={error} />
  }

  return <Sidebar logoutLoading={logoutLoading} onLogout={handleLogout} />
}
