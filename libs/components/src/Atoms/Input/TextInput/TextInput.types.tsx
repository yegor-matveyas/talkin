import { ChangeEvent } from 'react'
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
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onBlur: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
} & (DefaultTextInputProps | MultilineTextInputProps)

export type DefaultTextInputProps = {
  inputType?: 'text' | 'password' | 'email'
  startIcon?: IconName
  endIcon?: IconName
  onClear?: () => void
  onEndIconAction?: () => void
}

export type MultilineTextInputProps = {
  resizable?: boolean
  rows?: number
}

export type InputIconsArgs = { startIcon?: IconName; endIcon?: IconName; onEndIconAction?: () => void }
