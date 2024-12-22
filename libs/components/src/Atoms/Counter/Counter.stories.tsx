import type { Meta, StoryObj } from '@storybook/react'
import Counter from './Counter'

const meta: Meta<typeof Counter> = {
  component: Counter,
  title: 'Atoms/Counter',
}
export default meta
type Story = StoryObj<typeof Counter>

export const Empty: Story = { args: { maxlength: 20 } }

export const Default: Story = { args: { value: 10, maxlength: 20 } }

export const Warning: Story = { args: { value: 18, maxlength: 20 } }

export const Error: Story = { args: { value: 20, maxlength: 20 } }
