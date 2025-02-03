import type { Meta, StoryObj } from '@storybook/react'

import type { CircularProgressProps } from './CircularProgress.types'
import CircularProgress from './CircularProgress'

const meta: Meta<typeof CircularProgress> = {
  component: CircularProgress,
  title: 'Atoms/Progress/Circular',
}
export default meta

type Story = StoryObj<CircularProgressProps>

export const Default: Story = {
  args: {},
}

export const Big: Story = {
  args: {
    size: 80,
  },
}
