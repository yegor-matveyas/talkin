import cx from 'classnames'

import Icon from '../../Icon/Icon'
import { IconButtonProps } from './IconButton.types'

import styles from './IconButton.module.scss'

export default function IconButton({
  negative,
  disabled,
  name,
  variant = 'contained',
  size = 'md',
  onClick,
}: IconButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cx(styles.button, styles[size], styles[variant], { [styles.negative]: negative })}
    >
      <Icon name={name} />
    </button>
  )
}
