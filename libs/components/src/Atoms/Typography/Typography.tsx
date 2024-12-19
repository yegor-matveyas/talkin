import { JSX, CSSProperties } from 'react'
import cx from 'classnames'

import { TypographyVariant } from './Typography.types'
import { TypographyElements } from './Typography.utils'

import styles from './Typography.module.scss'

type ChildrenType = JSX.Element | JSX.Element[] | string

interface ComponentDefaultProps {
  className?: string
  style?: CSSProperties
}

interface TypographyProps extends ComponentDefaultProps {
  primary?: boolean
  negative?: boolean
  variant: TypographyVariant
  children?: ChildrenType
}

export default function Typography({
  primary = false,
  negative = false,
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
        { [styles.primary]: primary, [styles.negative]: negative },
        className
      )}
      style={style}
    >
      {children}
    </Element>
  )
}
