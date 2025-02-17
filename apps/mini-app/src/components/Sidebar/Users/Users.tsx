import { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'

import { useQuery } from '@hooks'
import { TUser } from '@types'

import ListItem from '../ListItem/ListItem'

import ql from './Users.ql'

type UsersProps = {
  username?: string
}

export default function Users({ username }: UsersProps) {
  const navigate = useNavigate()

  const { data } = useQuery<{ users: TUser[] }, UsersProps>(ql.users, { variables: { username } })

  const [sendRequest] = useMutation(ql.sendRequest)

  const users = useMemo<TUser[]>(() => {
    if (!data?.users) return []
    return data.users
  }, [data?.users])

  const handleClick = useCallback(
    async (user: TUser) => {
      if (user.currentChat) {
        navigate('/chats/' + user.currentChat.chatId)
      } else if (!user.requestSent) {
        await sendRequest({ variables: { receiverId: user.userId } })
      }
    },
    [navigate, sendRequest]
  )

  return users.map((u) => (
    <ListItem
      key={u.userId}
      text={u.username}
      onClick={() => handleClick(u)}
      endIcon={u.requestSent ? 'menu' : undefined}
    />
  ))
}
