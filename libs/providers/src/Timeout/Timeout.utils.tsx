import { useNavigate } from 'react-router-dom'
import { useMutation, gql } from '@apollo/client'

import { AuthUtils } from '@utils'

export const LOGOUT = gql`
  mutation logout {
    logout
  }
`

export function useLogout(): () => void {
  const navigate = useNavigate()

  const [logout] = useMutation(LOGOUT)

  const handleLogout = async () => {
    try {
      const result = await logout()
      if (result) {
        AuthUtils.deleteAccessToken()
        navigate('/auth/timedout')
      }
    } catch (err) {
      console.error('Unable to time out: ', err)
    }
  }

  return handleLogout
}
