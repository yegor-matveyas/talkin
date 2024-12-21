import type { Meta, StoryObj } from '@storybook/react'
import TextInput from './TextInput'

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  title: 'Atoms/Input/Text',
}
export default meta
type Story = StoryObj<typeof TextInput>

export const Default: Story = {
  args: {},
}

export const Multiline: Story = {
  args: {
    multiline: true,
  },
}
