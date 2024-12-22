import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import TextInput from './TextInput'

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  title: 'Atoms/Input/Text',
}
export default meta
type Story = StoryObj<typeof TextInput>

type ToggleInputWithStateProps = {
  defaultValue?: string
  disabled?: boolean
  fullWidth?: boolean
  maxlength?: number
  error?: string
  name: string
  placeholder?: string
}

function ToggleInputWithState({ defaultValue = '', ...rest }: ToggleInputWithStateProps) {
  const [value, setValue] = useState<string>(defaultValue)
  return <TextInput value={value} onChange={setValue} {...rest} />
}

export const Default: Story = {
  render: () => <ToggleInputWithState maxlength={20} name="firstName" placeholder="First Name" />,
}

const defaultValue = '01234567890123456789'
export const Error: Story = {
  render: () => (
    <ToggleInputWithState
      defaultValue={defaultValue}
      error="Wrong Message Format"
      maxlength={20}
      name="firstName"
      placeholder="First Name"
    />
  ),
}

export const Multiline: Story = {
  args: {
    multiline: true,
    disabled: false,
    fullWidth: false,
    name: 'message',
    placeholder: 'Message',
  },
}
