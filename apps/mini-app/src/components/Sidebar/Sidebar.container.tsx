import { useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'

import { Error } from '@components'
import { useQuery } from '@hooks'
import { AuthUtils } from '@utils'
import { TChat, TUser } from '@types'

import Sidebar from './Sidebar'
import { SearchInput, ListItem } from './Sidebar.types'
import ql from './Sidebar.ql'

const LOGIN_PAGE_PATH = '/auth/login'

export default function LayoutContainer() {
  const navigate = useNavigate()

  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')

  const {
    data: usersData,
    loading: usersLoading,
    error: usersError,
  } = useQuery<{ users: [TUser] }, SearchInput>(ql.search, { variables: { username: search } })

  const { data: chatsData } = useQuery<{ me: TUser }>(ql.chats)

  const [logout, { loading: logoutLoading, error: logoutError }] = useMutation(ql.logout)

  const handleLogout = async () => {
    const result = await logout()
    if (result) {
      AuthUtils.deleteAccessToken()
      navigate(LOGIN_PAGE_PATH)
    }
  }

  const handleChangeFocus = () => setIsFocused((isFocused) => !isFocused)

  const handleItemClick = useCallback((item: ListItem) => {
    if (item.chatExists) {
      console.log('chat exists')
    } else if (item.requestSent) {
      console.log('request sent')
    }
  }, [])

  const items = useMemo<ListItem[] | undefined>(() => {
    if (search) {
      return usersData?.users.map((u) => ({
        key: u.userId,
        title: u.username,
        chatExists: u.chatExists,
        requestSent: u.requestSent,
      }))
    }
    return chatsData?.me.chats.map((c) => ({ key: c.chatId, title: c.displayName }))
  }, [search, usersData?.users, chatsData?.me.chats])

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
    <Sidebar
      items={items}
      usersLoading={usersLoading}
      logoutLoading={logoutLoading}
      onFocusChange={handleChangeFocus}
      onSearch={setSearch}
      onClickItem={handleItemClick}
      onLogout={handleLogout}
    />
  )
}
