import type { ComponentDefaultProps } from '@types'

export type CircularProgressColors = 'white' | 'primary'

export interface CircularProgressProps extends ComponentDefaultProps {
  size?: number
  color?: CircularProgressColors
}
