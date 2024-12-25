import { ComponentDefaultProps } from '@types'

export type SelectInputProps = {
  disabled?: boolean
  multiple?: boolean
  size?: number
  placeholder: string
  value: string | string[]
  options?: Array<OptionArgs>
  onSelect: (value: string) => void
} & ComponentDefaultProps

export type OptionArgs = {
  disabled?: boolean
  value: string
  label: string
}

export type SelectInputWithStateProps = Omit<SelectInputProps, 'value' | 'onSelect'>
