import * as Yup from 'yup'

import { LoginInput } from '../Auth.types'

export const schema = Yup.object<LoginInput>().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
})
