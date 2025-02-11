import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'

import { Error } from '@components'
import { useQuery } from '@hooks'
import { AuthUtils } from '@utils'
import { TUser } from '@types'

import Layout from './Layout'
import { SearchInput } from './Layout.types'
import ql from './Layout.ql'

const LOGIN_PAGE_PATH = '/auth/login'

export default function LayoutContainer() {
  const [search, setSearch] = useState<string>('')

  const navigate = useNavigate()

  const {
    data: usersData,
    loading: usersLoading,
    error: usersError,
  } = useQuery<{ users: [TUser] }, SearchInput>(ql.search, { variables: { username: search } })

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

  const error = usersError || logoutError
  if (error) {
    return <Error error={error} />
  }

  return (
    <Layout
      users={usersData?.users}
      usersLoading={usersLoading}
      logoutLoading={logoutLoading}
      onSearch={setSearch}
      onLogout={handleLogout}
    />
  )
}
