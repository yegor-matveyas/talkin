import { useMemo, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import type { TextInputProps, DefaultTextInputProps, MultilineTextInputProps } from './TextInput.types'
import TextInput from './TextInput'

type TextInputWithStateProps = { defaultValue?: string } & Omit<TextInputProps, 'value' | 'onChange'> &
  (DefaultTextInputProps | MultilineTextInputProps) & { clearable?: boolean }

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  title: 'Atoms/Input/Text',
  render: function TextInputWithState({ defaultValue = '', clearable, ...rest }: TextInputWithStateProps) {
    const [value, setValue] = useState<string>(defaultValue)

    const restProps = useMemo(() => {
      if (clearable) {
        return { onClear: () => setValue(' ') }
      }
      return {}
    }, [clearable])

    return <TextInput value={value} onChange={(e) => setValue(e.target.value)} {...rest} {...restProps} />
  },
  parameters: { controls: { exclude: ['multiline', 'style', 'className', 'value', 'onChange'] } },
}
export default meta

type Story = StoryObj<TextInputWithStateProps>

export const Default: Story = {
  args: {
    multiline: false,
    disabled: false,
    fullWidth: false,
    clearable: false,
    maxLength: 20,
    placeholder: 'First Name',
    name: 'firstName',
  },
}

export const Error: Story = {
  args: {
    error: 'Wrong Message Format',
    ...Default.args,
    name: 'error',
    defaultValue: '01234567890123456789',
  },
}

export const Icons: Story = {
  args: {
    ...Default.args,
    startIcon: 'search',
    maxLength: undefined,
    placeholder: 'Last Name',
    clearable: true,
    name: 'lastName',
  },
}

export const Multiline: Story = {
  args: {
    multiline: true,
    disabled: false,
    resizable: false,
    fullWidth: false,
    placeholder: 'Message',
    name: 'message',
    error: '',
    maxLength: 1000,
  },
}
