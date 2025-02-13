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
  chats: gql`
    query me {
      me {
        chats {
          id
        }
      }
    }
  `,
  search: gql`
    query users($username: String) {
      users(where: { username: $username }) {
        userId
        username
        chatExists
        requestSent
      }
    }
  `,
}
