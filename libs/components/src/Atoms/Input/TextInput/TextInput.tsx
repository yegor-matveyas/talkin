import { ElementType, useMemo } from 'react'
import cx from 'classnames'

import Button from '../../Button/Button'
import Counter from '../../Counter/Counter'
import Icon from '../../Icon/Icon'
import Typography from '../../Typography/Typography'

import type { TextInputProps, DefaultTextInputProps, MultilineTextInputProps, InputIconsArgs } from './TextInput.types'

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
  onFocus,
  onBlur,
  className = '',
  style = {},
  ...rest
}: TextInputProps) {
  const Element = getTextInputElement(multiline)

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
  } = useMemo<InputIconsArgs>(() => {
    const result: InputIconsArgs = {}
    if (multiline) return result

    if ('startIcon' in rest) result.startIcon = rest.startIcon

    if ('onClear' in rest) {
      result.endIcon = 'close'
      result.onEndIconAction = rest.onClear
    } else if ('endIcon' in rest) {
      result.endIcon = rest.endIcon
      if ('onEndIconAction' in rest) {
        result.onEndIconAction = rest.onEndIconAction
      }
    }

    return result
  }, [multiline, rest])

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
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
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
      {endIcon &&
        (onEndIconAction ? (
          <Button.Icon
            disabled={disabled}
            variant="pure"
            size="sm"
            name={endIcon}
            onClick={onEndIconAction}
            className={styles.endIcon}
          />
        ) : (
          <div className={styles.endIconWrapper}>
            <Icon name={endIcon} className={styles.endIcon} />
          </div>
        ))}

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
