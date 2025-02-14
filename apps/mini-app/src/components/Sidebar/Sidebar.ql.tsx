import { gql } from '@apollo/client'

export default {
  logout: gql`
    mutation logout {
      logout
    }
  `,
}
