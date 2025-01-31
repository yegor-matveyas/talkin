import { useMemo } from 'react'
import { LinkProps } from 'react-router-dom'
import cx from 'classnames'

import type { TypographyProps } from './Typography.types'
import { TypographyElements } from './Typography.utils'

import styles from './Typography.module.scss'

export default function Typography({
  primary,
  negative,
  warning,
  variant,
  align = 'left',
  children = '',
  className = '',
  style = {},
  ...rest
}: TypographyProps) {
  const Element = TypographyElements[variant]

  const linkProps = useMemo<Partial<LinkProps>>(() => {
    if (variant !== 'link') return {}
    return {
      to: rest.to,
      replace: rest.replace,
    }
  }, [variant, rest])

  return (
    <Element
      className={cx(
        styles.typography,
        styles[variant],
        styles[align],
        { [styles.primary]: primary, [styles.negative]: negative, [styles.warning]: warning },
        className
      )}
      style={style}
      {...linkProps}
    >
      {children}
    </Element>
  )
}
