import { useMemo } from 'react'
import cx from 'classnames'

import type { ButtonProps } from './Button.types'

import styles from './Button.module.scss'

export default function Button({
  negative,
  disabled,
  type = 'button',
  variant = 'contained',
  children,
  className = '',
  style = {},
  ...rest
}: ButtonProps) {
  const buttonProps = useMemo(() => {
    if (type === 'submit') {
      const { onSubmit } = rest
      return { onSubmit }
    } else {
      const { onClick } = rest
      return { onClick }
    }
  }, [type, rest])

  return (
    <button
      type={type}
      disabled={disabled}
      className={cx(styles.button, styles[variant], { [styles.negative]: negative }, className)}
      style={style}
      {...buttonProps}
    >
      {children}
    </button>
  )
}
