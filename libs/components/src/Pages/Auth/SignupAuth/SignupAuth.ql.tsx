import { gql } from '@apollo/client'

export const SIGN_UP = gql`
  mutation signUp($username: String!, $email: String!, $password: String!) {
    signUp(signUpInput: { username: $username, email: $email, password: $password }) {
      accessToken
      expiresAt
    }
  }
`
