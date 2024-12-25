import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import SelectInput from './SelectInput'
import type { SelectInputWithStateProps } from './SelectInput.types'

const meta: Meta<typeof SelectInput> = {
  component: SelectInput,
  title: 'Atoms/Input/Select',

  render: function SelectInputWithState({ multiple, ...rest }: SelectInputWithStateProps) {
    const [value, setValue] = useState<string | string[]>(multiple ? [] : '')

    const handleSelect = (newValue: string) => {
      setValue((currentValue) => {
        if (!currentValue) {
          if (multiple) return [newValue]
          else return newValue
        }

        if (currentValue instanceof Array) {
          if (currentValue.includes(newValue)) return currentValue.filter((v) => v !== newValue)
          else return [...currentValue, newValue]
        }

        return newValue
      })
    }

    return <SelectInput multiple={multiple} value={value} onSelect={handleSelect} {...rest} />
  },
  parameters: { controls: { exclude: ['value', 'onSelect', 'style', 'className', 'multiple'] } },
}
export default meta
type Story = StoryObj<typeof SelectInput>

// TODO Add stories for multiple SelectInput

export const Empty: Story = {
  args: {
    disabled: false,
    placeholder: 'Select your character',
  },
}

export const Default: Story = {
  args: {
    ...Empty.args,
    options: [
      { value: '1', label: 'John Smith' },
      { value: '2', label: 'Orlando Bloom' },
      { value: '3', label: 'Bill Murray' },
      { value: '4', label: 'Christopher Lee' },
      { value: '5', label: 'Harrison Ford' },
    ],
  },
}
