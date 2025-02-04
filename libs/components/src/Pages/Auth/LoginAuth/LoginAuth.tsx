import { ApolloError } from '@apollo/client'

import { useFormik } from 'formik'

import AuthForm from '../../../Templates/AuthForm/AuthForm'
import Input from '../../../Atoms/Input/Input'
import PasswordInput from '../../../Molecules/PasswordInput/PasswordInput'

import { LoginInput } from '../Auth.types'

import { schema } from './LoginAuth.utils'

type LoginAuthProps = {
  loading?: boolean
  error?: ApolloError
  onSubmit: (input: LoginInput) => void
}

export default function LoginAuth({ loading, error, onSubmit }: LoginAuthProps) {
  const { values, errors, touched, handleBlur, handleSubmit, handleChange } = useFormik<LoginInput>({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: schema,
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
      <Input.Text
        disabled={loading}
        name="username"
        placeholder="Username"
        value={values.username}
        error={touched.username ? error?.message || errors.username : undefined}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <PasswordInput
        disabled={loading}
        name="password"
        placeholder="Password"
        value={values.password}
        error={touched.password ? error?.message || errors.password : undefined}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </AuthForm>
  )
}
