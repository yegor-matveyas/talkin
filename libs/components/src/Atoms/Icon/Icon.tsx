import { FC } from 'react'
import { ComponentDefaultProps } from '@types'

import CloseIcon from './CloseIcon'
import LockIcon from './LockIcon'
import MenuIcon from './MenuIcon'
import SearchIcon from './SearchIcon'

export type IconName = 'close' | 'lock' | 'menu' | 'search'

interface IconProps extends ComponentDefaultProps {
  name: IconName
}

const icons: Record<IconName, FC<ComponentDefaultProps>> = {
  close: CloseIcon,
  lock: LockIcon,
  menu: MenuIcon,
  search: SearchIcon,
}

export default function Icon({ name, className, style }: IconProps) {
  const IconElement = icons[name]
  return <IconElement className={className} style={style} />
}
