import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import ToggleInput from './ToggleInput'

const meta: Meta<typeof ToggleInput> = {
  component: ToggleInput,
  title: 'Atoms/Input/Toggle',
}
export default meta
type Story = StoryObj<typeof ToggleInput>

function ToggleInputWithState() {
  const [checked, setChecked] = useState<boolean>(false)
  return <ToggleInput checked={checked} onChange={() => setChecked((checked) => !checked)} />
}

export const Toggle: Story = {
  render: () => <ToggleInputWithState />,
}
