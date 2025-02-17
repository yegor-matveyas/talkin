import { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import { useQuery } from '@hooks'
import { TUser, TChat } from '@types'

import ListItem from '../ListItem/ListItem'

import ql from './Chats.ql'

export default function Chats() {
  const navigate = useNavigate()

  const { data } = useQuery<{ me: TUser }>(ql.chats, { fetchPolicy: 'cache-first' })

  const chats = useMemo<TChat[]>(() => {
    if (!data?.me.chats) return []
    return data.me.chats
  }, [data?.me.chats])

  const handleClick = useCallback(
    (chat: TChat) => {
      console.log(chat)
      navigate('/chats/' + chat.chatId)
    },
    [navigate]
  )

  return chats.map((c) => <ListItem key={c.chatId} text={c.displayName} onClick={() => handleClick(c)} />)
}
