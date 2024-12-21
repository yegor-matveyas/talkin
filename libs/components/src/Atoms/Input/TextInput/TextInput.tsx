import { ChangeEvent, ElementType, useMemo } from 'react'
import cx from 'classnames'

import { TextInputProps, DefaultTextInputProps, MultilineTextInputProps } from './TextInput.types'

import styles from './TextInput.module.scss'

export default function TextInput({
  disabled,
  negative,
  fullWidth,
  multiline,
  value,
  onChange,
  className = '',
  style = {},
  ...rest
}: TextInputProps) {
  const Element = getTextInputElement(multiline)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(e.target.value)
  }

  const inputProps = useMemo(() => {
    if (multiline) {
      const { rows = 3 } = rest as MultilineTextInputProps
      return { rows }
    }
    const { inputType } = rest as DefaultTextInputProps
    return { type: inputType }
  }, [multiline, rest])

  return (
    <Element
      disabled={disabled}
      value={value}
      onChange={handleChange}
      className={cx(
        styles.text,
        {
          [styles.negative]: negative,
          [styles.fullwidth]: fullWidth,
          [styles.multiline]: multiline,
        },
        className
      )}
      style={style}
      {...inputProps}
    />
  )
}

function getTextInputElement(multiline = false): ElementType {
  return multiline ? 'textarea' : 'input'
}
