import cx from 'classnames'
import styles from './ToggleInput.module.scss'
import { ChangeEvent } from 'react'

interface ToggleInputProps {
  checked: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function ToggleInput({ checked, onChange }: ToggleInputProps) {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className={cx(styles.toggle, { [styles.checked]: checked })}
    />
  )
}
