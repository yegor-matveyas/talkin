import { Outlet } from 'react-router-dom'

import { Button, SearchInput } from '@components'
import { TUser } from '@types'

import styles from './Layout.module.scss'

type TLayoutProps = {
  logoutLoading?: boolean
  usersLoading?: boolean
  users?: TUser[]
  onLogout: () => void
  onSearch: (value: string) => void
}

export default function Layout({ usersLoading, logoutLoading, users = [], onSearch, onLogout }: TLayoutProps) {
  return (
    <main className={styles.wrapper}>
      <section className={styles.sidebar}>
        <SearchInput onSearch={onSearch} />
        {usersLoading && <h2>Loading...</h2>}
        {users.map((u) => (
          <h3 key={u.userId}>{u.username}</h3>
        ))}
        <Button loading={logoutLoading} onClick={onLogout}>
          Log out
        </Button>
      </section>
      <Outlet />
    </main>
  )
}
