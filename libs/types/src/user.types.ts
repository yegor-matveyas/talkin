import { TChat } from './chat.types'

export type TUser = {
  userId: string
  username: string
  chats: TChat[]
  currentChat?: TChat
  chatExists: boolean
  requestSent: boolean
}
