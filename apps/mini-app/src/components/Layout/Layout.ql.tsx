import { gql } from '@apollo/client'

export const LOGOUT = gql`
  mutation logout {
    logout
  }
`

export default {
  logout: gql`
    mutation logout {
      logout
    }
  `,
  search: gql`
    query users($username: String) {
      users(where: { username: $username }) {
        userId
        username
      }
    }
  `,
}
