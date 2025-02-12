import cx from 'classnames'

import { AvatarProps } from './Avatar.types'
import { hashCode, intToRGB } from './Avatar.utils'

import styles from './Avatar.module.scss'

export default function Avatar({ size = 'xs', style = {}, className = '', ...rest }: AvatarProps) {
  if ('url' in rest) {
    const { url, alt } = rest

    return (
      <img src={url} alt={alt} className={cx(styles.avatar, styles.image, styles[size], className)} style={style} />
    )
  }

  const { children } = rest

  return (
    <div
      className={cx(styles.avatar, styles.fallback, styles[size], className)}
      style={{ ...style, backgroundColor: intToRGB(hashCode(children)) }}
    >
      {children.charAt(0).toUpperCase()}
    </div>
  )
}
