import { HTMLProps } from 'react'

export type ButtonTypes = 'submit' | 'button'
export type ButtonVariant = 'contained' | 'outlined' | 'text'

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  loading?: boolean
  negative?: boolean
  disabled?: boolean
  fullWidth?: boolean
  type?: ButtonTypes
  variant?: ButtonVariant
}
