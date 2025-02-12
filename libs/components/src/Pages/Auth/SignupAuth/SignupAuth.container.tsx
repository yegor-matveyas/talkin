import { useNavigate } from 'react-router-dom'

import { useMutation } from '@apollo/client'

import { AuthUtils } from '@utils'
import { TAuthCredentials } from '@types'

import Error from '../../Error/Error'

import { SignUpInput } from '../Auth.types'

import SignupAuth from './SignupAuth'
import { SIGN_UP } from './SignupAuth.ql'

export default function SignupAuthContainer() {
  const navigate = useNavigate()

  const [signUp, { error, loading }] = useMutation<{ signUp: TAuthCredentials }, SignUpInput>(SIGN_UP)

  const handleSubmit = async ({ username, email, password }: SignUpInput) => {
    const { data } = await signUp({ variables: { username, email, password } })
    if (data?.signUp) {
      AuthUtils.setAccessToken(data.signUp.accessToken, data.signUp.expiresAt)
      navigate('/')
    }
  }

  if (error) {
    return <Error error={error} />
  }

  return <SignupAuth loading={loading} error={error} onSubmit={handleSubmit} />
}
