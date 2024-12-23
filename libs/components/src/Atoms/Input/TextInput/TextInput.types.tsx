import type { ComponentDefaultProps } from '@types'
import type { IconName } from '../../Icon/Icon'

// TODO Recheck types

export type TextInputProps = ComponentDefaultProps & {
  multiline?: boolean
  disabled?: boolean
  fullWidth?: boolean
  placeholder?: string
  error?: string
  maxLength?: number
  minLength?: number
  name: string
  value: string
  onChange: (newValue: string) => void
} & (DefaultTextInputProps | MultilineTextInputProps)

export type DefaultTextInputProps = {
  clearable?: boolean
  inputType?: 'text' | 'password' | 'email'
  startIcon?: IconName
  endIcon?: IconName
  onEndIconAction?: () => void
}

export type MultilineTextInputProps = {
  resizable?: boolean
  rows?: number
}

export type IconsProps = { startIcon?: IconName; endIcon?: IconName; onEndIconAction?: () => void }
