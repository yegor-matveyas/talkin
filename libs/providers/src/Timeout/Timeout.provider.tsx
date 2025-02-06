import { ReactNode, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { useLogout } from './Timeout.utils'

const AUTO_LOGOUT_TIME = 15 * 60 * 1000 // 15 minutes

const ACTION_EVENTS = ['mousemove', 'keydown', 'scroll', 'click']
const EXEMPTED_PATHS = ['/auth']

export default function TimeoutProvider({ children }: { children: ReactNode }) {
  const timeoutRef = useRef<NodeJS.Timeout>()

  const navigate = useNavigate()
  const location = useLocation()

  const logout = useLogout()

  useEffect(() => {
    if (EXEMPTED_PATHS.some((path) => location.pathname.includes(path))) return

    const resetTimer = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(logout, AUTO_LOGOUT_TIME)
    }

    ACTION_EVENTS.forEach((event) => window.addEventListener(event, resetTimer))

    resetTimer()

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      ACTION_EVENTS.forEach((event) => window.removeEventListener(event, resetTimer))
    }
  }, [logout, navigate, location.pathname])

  return children
}
