type ListItemFunc = (i: ListItem) => void

export type SidebarProps = {
  logoutLoading?: boolean
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
