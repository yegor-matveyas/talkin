import { Outlet } from 'react-router-dom'
import { ApolloError } from '@apollo/client'

import { Button } from '@components'

type TLayoutProps = {
  loading?: boolean
  error?: ApolloError
  onLogout: () => void
}

export default function Layout({ loading, error, onLogout }: TLayoutProps) {
  return (
    <div>
      <h1>Layout</h1>
      <Outlet />
      <Button onClick={onLogout}>Log out</Button>
    </div>
  )
}
