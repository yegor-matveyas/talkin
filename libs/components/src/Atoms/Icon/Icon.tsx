import { FC } from 'react'
import { ComponentDefaultProps } from '@types'

import CloseIcon from './CloseIcon'
import MenuIcon from './MenuIcon'
import SearchIcon from './SearchIcon'

type IconName = 'close' | 'menu' | 'search'

interface IconProps extends ComponentDefaultProps {
  name: IconName
}

const icons: Record<IconName, FC<ComponentDefaultProps>> = {
  close: CloseIcon,
  menu: MenuIcon,
  search: SearchIcon,
}

export default function Icon({ name, className, style }: IconProps) {
  const IconElement = icons[name]
  return <IconElement className={className} style={style} />
}
