import type { Meta, StoryObj } from '@storybook/react'
import Typography from './Typography'

const meta: Meta<typeof Typography> = {
  component: Typography,
  title: 'Atoms/Typography',
}
export default meta
type Story = StoryObj<typeof Typography>

export const Title: Story = {
  args: {
    primary: false,
    negative: false,
    variant: 'title',
    children: 'Typography Title',
  },
}

export const Subtitle: Story = {
  args: {
    ...Title.args,
    variant: 'subtitle',
    children: 'Typography Subtitle',
  },
}

export const Text: Story = {
  args: {
    ...Subtitle.args,
    variant: 'text',
    children: 'Typography Text',
  },
}

export const Caption: Story = {
  args: {
    ...Text.args,
    variant: 'caption',
    children: 'Typography Caption',
  },
}
