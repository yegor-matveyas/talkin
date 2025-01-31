import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { AuthUtils } from '@utils'

import styles from './LayoutAuth.module.scss'

export default function LayoutAuth() {
  const navigate = useNavigate()

  useEffect(() => {
    if (AuthUtils.isAuthenticated()) {
      navigate('/', { replace: true })
    }
  }, [navigate])

  return (
    <div className={styles.layout}>
      <Outlet />
    </div>
  )
}
