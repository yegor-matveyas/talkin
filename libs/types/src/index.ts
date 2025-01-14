import { JSX, CSSProperties } from 'react'
export * from './chat.types'

export type ChildrenType = JSX.Element | JSX.Element[] | string

export interface ComponentDefaultProps {
  className?: string
  style?: CSSProperties
}
