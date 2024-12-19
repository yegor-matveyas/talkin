import { useMemo } from 'react'
import cx from 'classnames'

import { ButtonProps } from './Button.types'

import styles from './Button.module.scss'

export default function Button({
  type = 'button',
  variant = 'contained',
  negative = false,
  disabled = false,
  children,
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
      className={cx(styles.button, styles[variant], { [styles.negative]: negative })}
      {...buttonProps}
    >
      {children}
    </button>
  )
}
