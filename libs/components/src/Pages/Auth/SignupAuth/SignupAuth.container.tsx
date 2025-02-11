import { useNavigate } from 'react-router-dom'

import { useMutation } from '@apollo/client'

import { AuthUtils } from '@utils'
import { TAuthCredentials } from '@types'

import { SignUpInput } from '../Auth.types'

import SignupAuth from './SignupAuth'
import { SIGN_UP } from './SignupAuth.ql'

export default function SignupAuthContainer() {
  const navigate = useNavigate()

  const [signUp, { error, loading }] = useMutation<TAuthCredentials, SignUpInput>(SIGN_UP)

  const handleSubmit = async ({ username, email, password }: SignUpInput) => {
    const { data } = await signUp({ variables: { username, email, password } })

    if (data?.accessToken) {
      AuthUtils.setAccessToken(data.accessToken, data.expiresAt)
      navigate('/')
    }
  }

  return <SignupAuth loading={loading} error={error} onSubmit={handleSubmit} />
}
