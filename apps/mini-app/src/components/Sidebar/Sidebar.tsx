import { useState } from 'react'

import { Button, SearchInput } from '@components'

import Chats from './Chats/Chats'
import Users from './Users/Users'

import type { SidebarProps } from './Sidebar.types'
import styles from './Sidebar.module.scss'

export default function Sidebar({ logoutLoading, onLogout }: SidebarProps) {
  const [isSearching, setIsSearching] = useState<boolean>(false)
  const [username, setUsername] = useState<string>('')

  return (
    <section className={styles.sidebar}>
      <div className={styles.header}>
        {isSearching && <Button.Icon name="close" onClick={() => setIsSearching(false)} />}
        <SearchInput onFocus={() => setIsSearching(true)} onSearch={setUsername} />
      </div>
      <div className={styles.items}>{isSearching ? <Users username={username} /> : <Chats />}</div>
      <Button loading={logoutLoading} onClick={onLogout}>
        Log out
      </Button>
    </section>
  )
}
