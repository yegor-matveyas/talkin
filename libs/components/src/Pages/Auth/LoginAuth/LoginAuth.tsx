import { ApolloError } from '@apollo/client'

import { useFormik } from 'formik'

import Input from '../../../Atoms/Input/Input'
import PasswordInput from '../../../Molecules/PasswordInput/PasswordInput'

import AuthForm from '../../../Templates/AuthForm/AuthForm'

import { TAuthInput } from './LoginAuth.types'

type LoginAuthProps = {
  loading: boolean
  error?: ApolloError
  onSubmit: ({ username, password }: TAuthInput) => void
}

export default function LoginAuth({ onSubmit }: LoginAuthProps) {
  const { values, handleSubmit, handleChange } = useFormik<TAuthInput>({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit,
  })

  return (
    <AuthForm
      title="Talkin. Mini-App."
      description={[
        'Log in to the Talkin Mini-App.',
        'This is a mini-version of the Talkin application represented by the text chat.',
      ]}
      submitMessage="LOG IN"
      onSubmit={handleSubmit}
    >
      <Input.Text name="username" placeholder="Username" value={values.username} onChange={handleChange} />
      <PasswordInput name="password" placeholder="Password" value={values.password} onChange={handleChange} />
    </AuthForm>
  )
}
