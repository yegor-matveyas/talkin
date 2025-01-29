import { useMutation } from '@apollo/client'

import { AuthUtils } from '@utils'
import { TAuthCredentials } from '@types'

import LoginAuth from './LoginAuth'
import { TAuthInput } from './LoginAuth.types'
import { LOGIN } from './LoginAuth.ql'

export default function LoginAuthContainer() {
  const [login, { loading, error }] = useMutation<TAuthCredentials, TAuthInput>(LOGIN)

  const handleSubmit = async ({ username, password }: TAuthInput) => {
    const { data } = await login({ variables: { username, password } })

    if (data?.accessToken) {
      AuthUtils.setAccessToken(data.accessToken)
    }
  }

  return <LoginAuth loading={loading} error={error} onSubmit={handleSubmit} />
}
