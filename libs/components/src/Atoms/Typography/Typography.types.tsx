import { LinkProps } from 'react-router-dom'
import { ChildrenType, ComponentDefaultProps } from '@types'

export type TypographyVariant = 'title' | 'subtitle' | 'text' | 'caption' | 'link'
export type TypographyAlignment = 'left' | 'center' | 'right'

export interface TypographyProps extends ComponentDefaultProps, Partial<LinkProps> {
  primary?: boolean
  negative?: boolean
  warning?: boolean
  variant: TypographyVariant
  align?: TypographyAlignment
  children?: ChildrenType
}
