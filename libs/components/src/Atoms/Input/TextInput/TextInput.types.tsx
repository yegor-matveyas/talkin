import { ComponentDefaultProps } from '@types'

export type TextInputProps = {
  disabled?: boolean
  negative?: boolean
  fullWidth?: boolean
  value?: string
  onChange: (newValue: string) => void
} & (DefaultTextInputProps | MultilineTextInputProps) &
  ComponentDefaultProps

export type DefaultTextInputProps = {
  multiline: false | undefined
  inputType: 'text' | 'password' | 'email'
}

export type MultilineTextInputProps = {
  multiline: true
  rows?: number
}
