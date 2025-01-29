import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(authInput: { username: $username, password: $password }) {
      accessToken
      expiresAt
    }
  }
`
