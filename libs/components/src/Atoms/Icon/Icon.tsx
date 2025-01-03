import { FC } from 'react'
import cx from 'classnames'

import type { ComponentDefaultProps } from '@types'

import CloseIcon from './CloseIcon'
import LockIcon from './LockIcon'
import MenuIcon from './MenuIcon'
import SearchIcon from './SearchIcon'
import VisibilityIcon from './VisibilityIcon'
import VisibilityOffIcon from './VisibilityOffIcon'

import styles from './Icon.module.scss'

export type IconName = 'close' | 'lock' | 'menu' | 'search' | 'visibility' | 'visibilityOff'

interface IconProps extends ComponentDefaultProps {
  name: IconName
}

const icons: Record<IconName, FC<ComponentDefaultProps>> = {
  close: CloseIcon,
  lock: LockIcon,
  menu: MenuIcon,
  search: SearchIcon,
  visibility: VisibilityIcon,
  visibilityOff: VisibilityOffIcon,
}

export default function Icon({ name, className, style }: IconProps) {
  const IconElement = icons[name]
  return <IconElement className={cx(className, styles.icon)} style={style} />
}
