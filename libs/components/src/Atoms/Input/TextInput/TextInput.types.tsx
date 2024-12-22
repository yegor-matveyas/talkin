import { ComponentDefaultProps } from '@types'

export type TextInputProps = {
  disabled?: boolean
  fullWidth?: boolean
  placeholder?: string
  error?: string
  maxlength?: number
  name: string
  value?: string
  onChange: (newValue: string) => void
} & (DefaultTextInputProps | MultilineTextInputProps) &
  ComponentDefaultProps

export type DefaultTextInputProps = {
  multiline?: false | undefined
  inputType?: 'text' | 'password' | 'email'
}

export type MultilineTextInputProps = {
  multiline: true
  resizable?: boolean
  rows?: number
}
