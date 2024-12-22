import { ChildrenType, ComponentDefaultProps } from '@types'

export type TypographyVariant = 'title' | 'subtitle' | 'text' | 'caption'

export interface TypographyProps extends ComponentDefaultProps {
  primary?: boolean
  negative?: boolean
  warning?: boolean
  variant: TypographyVariant
  children?: ChildrenType
}
