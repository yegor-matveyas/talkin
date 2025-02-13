type ListItemFunc = (i: ListItem) => void

export type SidebarProps = {
  logoutLoading?: boolean
  usersLoading?: boolean
  items?: ListItem[]
  onFocusChange: () => void
  onSearch: (value: string) => void
  onClickItem: ListItemFunc
  onLogout: () => void
}

export type ItemProps = {
  item: ListItem
  onClick: ListItemFunc
}

export type SearchInput = {
  username?: string
}

export type ListItem = {
  key: string
  title: string
  chatExists?: boolean
  requestSent?: boolean
}
