import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'

import { AuthUtils } from '@utils'

import Layout from './Layout'

import { LOGOUT } from './Layout.ql'

const LOGIN_PAGE_PATH = '/auth/login'

export default function LayoutContainer() {
  const navigate = useNavigate()

  const [logout, { error, loading }] = useMutation(LOGOUT)

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

  return <Layout loading={loading} error={error} onLogout={handleLogout} />
}
