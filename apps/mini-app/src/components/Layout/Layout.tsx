import { Outlet } from 'react-router-dom'

import Sidebar from '../Sidebar/Sidebar.container'

import styles from './Layout.module.scss'

export default function Layout() {
  return (
    <main className={styles.wrapper}>
      <Sidebar />
      <Outlet />
    </main>
  )
}
