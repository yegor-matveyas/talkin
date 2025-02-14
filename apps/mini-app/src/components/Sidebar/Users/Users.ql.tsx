import { gql } from '@apollo/client'

export default {
  users: gql`
    query users($username: String) {
      users(where: { username: $username }) {
        userId
        username
        currentChat {
          chatId
        }
        requestSent
      }
    }
  `,
}
