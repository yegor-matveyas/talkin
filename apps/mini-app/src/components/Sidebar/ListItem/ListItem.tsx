import { Avatar, Icon, Typography } from '@components'

import type { ListItemProps } from './ListItem.types'
import styles from './ListItem.module.scss'

export default function ListItem({ text, endIcon, onClick }: ListItemProps) {
  return (
    <div className={styles.item} onClick={onClick}>
      <Avatar size="md">{text}</Avatar>
      <Typography variant="text">{text}</Typography>
      {endIcon && <Icon name={endIcon} />}
    </div>
  )
}
