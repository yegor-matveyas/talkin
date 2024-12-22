import { ChangeEvent, ElementType, useMemo } from 'react'
import cx from 'classnames'

import Counter from '../../Counter/Counter'
import Typography from '../../Typography/Typography'

import { TextInputProps, DefaultTextInputProps, MultilineTextInputProps } from './TextInput.types'

import styles from './TextInput.module.scss'

export default function TextInput({
  disabled,
  fullWidth,
  multiline,
  placeholder,
  error,
  maxlength,
  name,
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
    const { inputType = 'text' } = rest as DefaultTextInputProps
    return { type: inputType }
  }, [multiline, rest])

  const isInputNegative = error || (maxlength && maxlength === value?.length)
  return (
    <div className={cx(styles.wrapper, { [styles.fullwidth]: fullWidth })}>
      <Element
        disabled={disabled}
        maxlength={maxlength}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        className={cx(
          styles.input,
          {
            [styles.negative]: isInputNegative,
            [styles.multiline]: multiline,
          },
          className
        )}
        style={style}
        {...inputProps}
      />
      {placeholder && (
        <label htmlFor={name} className={styles.label}>
          {placeholder}
        </label>
      )}
      <div className={cx(styles.footer, { [styles.error]: error })}>
        {error && (
          <Typography negative variant="caption" className={styles.error}>
            {error}
          </Typography>
        )}
        {maxlength && <Counter value={value?.length} maxlength={maxlength} className={styles.counter} />}
      </div>
    </div>
  )
}

function getTextInputElement(multiline = false): ElementType {
  return multiline ? 'textarea' : 'input'
}
