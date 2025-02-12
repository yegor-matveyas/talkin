export type SidebarProps = {
  logoutLoading?: boolean
  usersLoading?: boolean
  items?: ListItem[]
  onFocusChange: () => void
  onSearch: (value: string) => void
  onLogout: () => void
}

export type ItemProps = {
  item: ListItem
}

export type SearchInput = {
  username?: string
}

export type ListItem = {
  key: string
  title: string
}
