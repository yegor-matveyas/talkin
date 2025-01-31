import { ApolloError } from '@apollo/client'

import { useFormik } from 'formik'

import AuthForm from '../../../Templates/AuthForm/AuthForm'
import Input from '../../../Atoms/Input/Input'
import PasswordInput from '../../../Molecules/PasswordInput/PasswordInput'

import { LoginInput } from '../Auth.types'

type LoginAuthProps = {
  loading: boolean
  error?: ApolloError
  onSubmit: (input: LoginInput) => void
}

export default function LoginAuth({ onSubmit }: LoginAuthProps) {
  const { values, handleSubmit, handleChange } = useFormik<LoginInput>({
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
      actionLink={{
        text: 'Sign up',
        to: '/auth/signup',
      }}
      onSubmit={handleSubmit}
    >
      <Input.Text name="username" placeholder="Username" value={values.username} onChange={handleChange} />
      <PasswordInput name="password" placeholder="Password" value={values.password} onChange={handleChange} />
    </AuthForm>
  )
}
