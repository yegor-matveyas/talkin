import { Outlet } from 'react-router-dom'
import { ApolloError } from '@apollo/client'

import { Button, SearchInput } from '@components'

import styles from './Layout.module.scss'

type TLayoutProps = {
  loading?: boolean
  error?: ApolloError
  onLogout: () => void
}

export default function Layout({ loading, error, onLogout }: TLayoutProps) {
  const handleSearch = (search: string) => {
    console.log('search ', search)
  }

  return (
    <main className={styles.wrapper}>
      <section className={styles.sidebar}>
        <SearchInput onSearch={handleSearch} />
        <Button onClick={onLogout}>Log out</Button>
      </section>
      <Outlet />
    </main>
  )
}
