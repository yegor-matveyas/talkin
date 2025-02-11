import { JSX, CSSProperties } from 'react'

export * from './auth.types'
export * from './chat.types'
export * from './user.types'

export type ChildrenType = JSX.Element | JSX.Element[] | string

export interface ComponentDefaultProps {
  className?: string
  style?: CSSProperties
}
