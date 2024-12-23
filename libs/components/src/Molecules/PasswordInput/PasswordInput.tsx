import { useState } from 'react'
import Input from '../../Atoms/Input/Input'

import type { PasswordInputProps } from './PasswordInput.types'

const PASSWORD_MIN_LENGTH = 12
const PASSWORD_MAX_LENGTH = 32

export default function PasswordInput({ name, value, onChange, ...rest }: PasswordInputProps) {
  const [hidden, setHidden] = useState(true)
  return (
    <Input.Text
      inputType={hidden ? 'password' : 'text'}
      startIcon="lock"
      endIcon={hidden ? 'visibilityOff' : 'visibility'}
      onEndIconAction={() => setHidden((hidden) => !hidden)}
      maxLength={PASSWORD_MAX_LENGTH}
      minLength={PASSWORD_MIN_LENGTH}
      name={name}
      value={value}
      onChange={onChange}
      {...rest}
    />
  )
}
