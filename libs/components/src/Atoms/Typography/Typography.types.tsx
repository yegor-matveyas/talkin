import { CSSProperties } from 'react'
import { ChildrenType } from '@types'

export type TypographyVariant = 'title' | 'subtitle' | 'text' | 'caption'

export interface ComponentDefaultProps {
  className?: string
  style?: CSSProperties
}

export interface TypographyProps extends ComponentDefaultProps {
  primary?: boolean
  negative?: boolean
  variant: TypographyVariant
  children?: ChildrenType
}
