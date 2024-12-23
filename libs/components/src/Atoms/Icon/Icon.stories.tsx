import type { Meta, StoryObj } from '@storybook/react'
import Icon from './Icon'

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'Atoms/Icon',
}
export default meta
type Story = StoryObj<typeof Icon>

export const Close: Story = { args: { name: 'close' } }

export const Lock: Story = { args: { name: 'lock' } }

export const Menu: Story = { args: { name: 'menu' } }

export const Search: Story = { args: { name: 'search' } }

export const Visibility: Story = { args: { name: 'visibility' } }
