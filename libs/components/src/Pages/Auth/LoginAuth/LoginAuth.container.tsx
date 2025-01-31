import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-dom'

import { AuthUtils } from '@utils'
import { TAuthCredentials } from '@types'

import { LoginInput } from '../Auth.types'

import LoginAuth from './LoginAuth'
import { LOGIN } from './LoginAuth.ql'

export default function LoginAuthContainer() {
  const navigate = useNavigate()

  const [login, { loading, error }] = useMutation<{ login: TAuthCredentials }, LoginInput>(LOGIN)

  const handleSubmit = async ({ username, password }: LoginInput) => {
    const { data } = await login({ variables: { username, password } })
    if (data?.login) {
      AuthUtils.setAccessToken(data.login.accessToken)
      navigate('/')
    }
  }

  return <LoginAuth loading={loading} error={error} onSubmit={handleSubmit} />
}
