import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-dom'

import { AuthUtils, ErrorMessage } from '@utils'
import { TAuthCredentials } from '@types'

import Error from '../../Error/Error'

import { LoginInput } from '../Auth.types'

import LoginAuth from './LoginAuth'
import { LOGIN } from './LoginAuth.ql'

export default function LoginAuthContainer() {
  const navigate = useNavigate()

  const [login, { loading, error }] = useMutation<{ login: TAuthCredentials }, LoginInput>(LOGIN)

  const handleSubmit = async ({ username, password }: LoginInput) => {
    const { data } = await login({ variables: { username, password } })
    if (data?.login) {
      AuthUtils.setAccessToken(data.login.accessToken, data.login.expiresAt)
      navigate('/')
    }
  }

  if (error && error.message !== ErrorMessage.UNAUTHENTICATED) {
    return <Error error={error} />
  }

  return <LoginAuth loading={loading} error={error} onSubmit={handleSubmit} />
}
