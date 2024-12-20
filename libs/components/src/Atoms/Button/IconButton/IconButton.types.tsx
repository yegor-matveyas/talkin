import { ComponentDefaultProps } from '@types'
import { IconName } from '../../Icon/Icon'

export type IconButtonVariant = 'contained' | 'outlined' | 'pure'

export interface IconButtonProps extends ComponentDefaultProps {
  negative?: boolean
  disabled?: boolean
  name: IconName
  variant?: IconButtonVariant
  size?: 'sm' | 'md'
  onClick?: (...rest: unknown[]) => void
}
