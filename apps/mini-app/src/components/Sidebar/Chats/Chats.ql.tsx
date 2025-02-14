import { gql } from '@apollo/client'

export default {
  chats: gql`
    query me {
      me {
        chats {
          id
        }
      }
    }
  `,
}
