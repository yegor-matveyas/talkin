import SelectInput from './SelectInput/SelectInput'
import TextInput from './TextInput/TextInput'
import ToggleInput from './ToggleInput/ToggleInput'

export default function Input() {
  return <input />
}

Input.Select = SelectInput
Input.Text = TextInput
Input.Toggle = ToggleInput
