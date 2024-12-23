import { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import SearchInputComponent from './SearchInput'
import { SearchInputProps } from './SearchInput.types'

type PasswordInputWithStateProps = Omit<SearchInputProps, 'onSearch'>

const meta: Meta<typeof SearchInputComponent> = {
  component: SearchInputComponent,
  title: 'Molecules/SearchInput',
  render: function PasswordInputWithState(props: PasswordInputWithStateProps) {
    const [value, setValue] = useState<string>('')

    useEffect(() => {
      console.log('value: ', value)
    }, [value])

    return <SearchInputComponent onSearch={setValue} {...props} />
  },
  parameters: { controls: { exclude: ['style', 'className', 'onSearch'] } },
}
export default meta

type Story = StoryObj<PasswordInputWithStateProps>

export const SearchInput: Story = {
  args: {
    disabled: false,
    fullWidth: false,
    placeholder: 'Search',
  },
}
