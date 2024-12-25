import cx from 'classnames'

import { SelectInputProps, OptionArgs } from './SelectInput.types'

import styles from './SelectInput.module.scss'

export default function SelectInput({
  disabled,
  multiple,
  size = 3,
  placeholder,
  value,
  options = [],
  onSelect,
}: SelectInputProps) {
  return (
    <select
      disabled={disabled || !options.length}
      multiple={multiple}
      value={value}
      onChange={(e) => onSelect(e.target.value)}
      size={multiple ? size : undefined}
      className={styles.select}
    >
      <option disabled value="" className={cx(styles.option, styles.placeholder)}>
        {placeholder}
      </option>

      {options.map(({ value, label }) => (
        <Option key={value} value={value} label={label} />
      ))}
    </select>
  )
}

function Option({ value, label }: OptionArgs) {
  return (
    <option value={value} className={styles.option}>
      {label}
    </option>
  )
}
