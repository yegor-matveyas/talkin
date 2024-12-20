import type { Meta, StoryObj } from '@storybook/react'
import IconButton from './IconButton'

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: 'Atoms/Button/Icon',
}
export default meta
type Story = StoryObj<typeof IconButton>

export const Contained: Story = {
  args: {
    negative: false,
    disabled: false,
    size: 'md',
    name: 'close',
    variant: 'contained',
  },
}

export const Outlined: Story = {
  args: {
    ...Contained.args,
    variant: 'outlined',
  },
}

export const Pure: Story = {
  args: {
    ...Outlined.args,
    variant: 'pure',
  },
}
