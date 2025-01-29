import { ChildrenType, ComponentDefaultProps } from '@types'

export type TypographyVariant = 'title' | 'subtitle' | 'text' | 'caption'
export type TypographyAlignment = 'left' | 'center' | 'right'

export interface TypographyProps extends ComponentDefaultProps {
  primary?: boolean
  negative?: boolean
  warning?: boolean
  variant: TypographyVariant
  align?: TypographyAlignment
  children?: ChildrenType
}
