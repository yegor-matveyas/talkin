import { ApolloError } from '@apollo/client'

import { useFormik } from 'formik'

import AuthForm from '../../../Templates/AuthForm/AuthForm'
import Input from '../../../Atoms/Input/Input'
import PasswordInput from '../../../Molecules/PasswordInput/PasswordInput'

import { SignUpInput } from '../Auth.types'

type SignUpAuthProps = {
  loading: boolean
  error?: ApolloError
  onSubmit: (input: SignUpInput) => void
}

export default function SignupAuth({ onSubmit }: SignUpAuthProps) {
  const { values, handleSubmit, handleChange } = useFormik<SignUpInput & { confirmPassword: string }>({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: ({ username, email, password }) => onSubmit({ username, email, password }),
  })

  return (
    <AuthForm
      title="Talkin."
      description={['Sign up on the Talkin!']}
      submitMessage="SIGN UP"
      actionLink={{
        text: 'Log in',
        to: '/auth/login',
      }}
      onSubmit={handleSubmit}
    >
      <Input.Text name="username" placeholder="Username" value={values.username} onChange={handleChange} />
      <Input.Text inputType="email" name="email" placeholder="Email" value={values.username} onChange={handleChange} />
      <PasswordInput name="password" placeholder="Password" value={values.password} onChange={handleChange} />
      <PasswordInput
        name="confirmPassword"
        placeholder="Confirm Password"
        value={values.confirmPassword}
        onChange={handleChange}
      />
    </AuthForm>
  )
}
