import cx from 'classnames'

import type { TypographyProps } from './Typography.types'
import { TypographyElements } from './Typography.utils'

import styles from './Typography.module.scss'

export default function Typography({
  primary,
  negative,
  warning,
  variant,
  children = '',
  className = '',
  style = {},
}: TypographyProps) {
  const Element = TypographyElements[variant]

  return (
    <Element
      className={cx(
        styles.typography,
        styles[variant],
        { [styles.primary]: primary, [styles.negative]: negative, [styles.warning]: warning },
        className
      )}
      style={style}
    >
      {children}
    </Element>
  )
}
