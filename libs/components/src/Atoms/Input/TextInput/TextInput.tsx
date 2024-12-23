import { ChangeEvent, ElementType, useMemo } from 'react'
import cx from 'classnames'

import Button from '../../Button/Button'
import Counter from '../../Counter/Counter'
import Icon from '../../Icon/Icon'
import Typography from '../../Typography/Typography'

import type { TextInputProps, DefaultTextInputProps, MultilineTextInputProps, IconsProps } from './TextInput.types'

import styles from './TextInput.module.scss'

export default function TextInput({
  disabled,
  fullWidth,
  multiline,
  placeholder,
  error,
  maxLength,
  minLength,
  name,
  value,
  onChange,
  className = '',
  style = {},
  ...rest
}: TextInputProps) {
  const Element = getTextInputElement(multiline)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
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

  const {
    startIcon = undefined,
    endIcon = undefined,
    onEndIconAction = undefined,
  } = useMemo<IconsProps>(() => {
    const result: IconsProps = {}
    if (multiline) return result

    if ('startIcon' in rest) result.startIcon = rest.startIcon

    if ('clearable' in rest && !!rest.clearable) {
      result.endIcon = 'close'
      result.onEndIconAction = () => onChange('')
    } else if ('endIcon' in rest) {
      result.endIcon = rest.endIcon
      result.onEndIconAction = rest.onEndIconAction
    }

    return result
  }, [multiline, rest, onChange])

  const negative = error || (maxLength && (value?.length ?? 0) > maxLength)
  return (
    <div className={cx(styles.wrapper, { [styles.fullwidth]: fullWidth })}>
      <Element
        disabled={disabled}
        maxLength={maxLength}
        minLength={minLength}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        className={cx(
          styles.input,
          {
            [styles.negative]: negative,
            [styles.multiline]: multiline,
            [styles.resizable]: 'resizable' in rest && rest.resizable,
            [styles.startIconSpace]: !!startIcon,
            [styles.endIconSpace]: !!endIcon,
          },
          className
        )}
        style={style}
        {...inputProps}
      />
      {startIcon && (
        <div className={styles.startIconWrapper}>
          <Icon name={startIcon} className={styles.startIcon} />
        </div>
      )}

      {placeholder && (
        <label htmlFor={name} className={styles.label}>
          {placeholder}
        </label>
      )}
      {endIcon && (
        <Button.Icon
          disabled={disabled}
          variant="pure"
          size="sm"
          name={endIcon}
          onClick={onEndIconAction}
          className={styles.endIcon}
        />
      )}

      <div className={cx(styles.footer, { [styles.error]: error })}>
        {error && (
          <Typography negative variant="caption" className={styles.error}>
            {error}
          </Typography>
        )}
        {!!maxLength && <Counter value={value?.length} maxLength={maxLength} className={styles.counter} />}
      </div>
    </div>
  )
}

function getTextInputElement(multiline = false): ElementType {
  return multiline ? 'textarea' : 'input'
}
