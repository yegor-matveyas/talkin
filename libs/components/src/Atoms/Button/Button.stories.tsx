import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Atoms/Button',
}
export default meta
type Story = StoryObj<typeof Button>

export const Contained: Story = {
  args: {
    negative: false,
    disabled: false,
    children: 'I am a button',
    variant: 'contained',
  },
}

export const Outlined: Story = {
  args: {
    ...Contained.args,
    variant: 'outlined',
  },
}

export const Text: Story = {
  args: {
    ...Outlined.args,
    variant: 'text',
  },
}

export const loading: Story = {
  args: {
    ...Contained.args,
    loading: true,
  },
}
