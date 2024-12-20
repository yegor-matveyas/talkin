import { JSX, CSSProperties } from 'react'

export type ChildrenType = JSX.Element | JSX.Element[] | string

export interface ComponentDefaultProps {
  className?: string
  style?: CSSProperties
}
