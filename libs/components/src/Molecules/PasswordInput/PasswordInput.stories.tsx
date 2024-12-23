import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import PasswordInputComponent from './PasswordInput'
import { PasswordInputProps } from './PasswordInput.types'

type PasswordInputWithStateProps = Omit<PasswordInputProps, 'value' | 'onChange'>

const meta: Meta<typeof PasswordInputComponent> = {
  component: PasswordInputComponent,
  title: 'Molecules/PasswordInput',
  render: function PasswordInputWithState(props: PasswordInputWithStateProps) {
    const [value, setValue] = useState<string>('')
    return <PasswordInputComponent value={value} onChange={setValue} {...props} />
  },
  parameters: { controls: { exclude: ['style', 'className', 'value', 'onChange'] } },
}
export default meta

type Story = StoryObj<PasswordInputWithStateProps>

export const PasswordInput: Story = {
  args: {
    disabled: false,
    fullWidth: false,
    placeholder: 'Password',
    name: 'password',
  },
}
