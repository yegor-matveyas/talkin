import { TUser } from './user.types'

export type TChat = {
  chatId: string
  displayName: string
  members: TUser[]
}

export enum ChatType {
  DEFAULT,
  GROUP,
}

export enum MessageType {
  ATTACHMENT,
  EVENT,
  TEXT,
}

export enum MessageNodeType {
  ATTACHMENT,
  EVENT,
  LINK,
  MENTION,
  TEXT,
}

export enum MessageNodeStyle {
  BOLD,
  ITALIC,
}
