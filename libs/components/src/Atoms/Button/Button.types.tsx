import { HTMLProps } from 'react'

export type ButtonTypes = 'submit' | 'button'
export type ButtonVariant = 'contained' | 'outlined' | 'text'

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  negative?: boolean
  disabled?: boolean
  type?: ButtonTypes
  variant?: ButtonVariant
}
