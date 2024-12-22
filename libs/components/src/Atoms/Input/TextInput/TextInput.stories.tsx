import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import TextInput from './TextInput'
import { TextInputProps } from './TextInput.types'

interface TextInputWithStateProps extends Omit<TextInputProps, 'value' | 'onChange'> {
  defaultValue?: string
}
const meta: Meta<typeof TextInput> = {
  component: TextInput,
  title: 'Atoms/Input/Text',
  render: function TextInputWithState({ defaultValue = '', ...rest }: TextInputWithStateProps) {
    const [value, setValue] = useState<string>(defaultValue)
    return <TextInput value={value} onChange={setValue} {...rest} />
  },
}
export default meta

type Story = StoryObj<typeof TextInput>

export const Default: Story = {
  args: {
    disabled: false,
    fullWidth: false,
    maxlength: 20,
    placeholder: 'First Name',
    name: 'firstName',
  },
}

export const Error: Story = {
  args: {
    error: 'Wrong Message Format',
    ...Default.args,
  },
}

export const Multiline: Story = {
  args: {
    disabled: false,
    resizable: false,
    fullWidth: false,
    placeholder: 'Message',
    name: 'message',
    multiline: true,
  },
}
