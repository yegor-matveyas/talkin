import { HTMLProps } from 'react'

export type ButtonTypes = 'submit' | 'button'
export type ButtonVariant = 'contained' | 'outlined' | 'text'

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: ButtonTypes
  variant?: ButtonVariant
  negative?: boolean
  disabled?: boolean
}
