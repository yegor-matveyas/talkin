import { Avatar, Button, Icon, SearchInput, Typography } from '@components'

import { SidebarProps, ItemProps } from './Sidebar.types'
import styles from './Sidebar.module.scss'

export default function Sidebar({
  usersLoading,
  logoutLoading,
  items = [],
  onFocusChange,
  onSearch,
  onClickItem,
  onLogout,
}: SidebarProps) {
  console.log('items ', items)

  return (
    <section className={styles.sidebar}>
      <SearchInput onFocus={onFocusChange} onBlur={onFocusChange} onSearch={onSearch} />
      <div className={styles.items}>
        {items.map((i) => (
          <Item key={i.key} item={i} onClick={onClickItem} />
        ))}
      </div>
      <Button loading={logoutLoading} onClick={onLogout}>
        Log out
      </Button>
    </section>
  )
}

function Item({ item, onClick }: ItemProps) {
  return (
    <div className={styles.item} onClick={() => onClick(item)}>
      <Avatar size="md">{item.title}</Avatar>
      <Typography variant="text">{item.title}</Typography>
      {item.requestSent && <Icon name="search" />}
    </div>
  )
}
