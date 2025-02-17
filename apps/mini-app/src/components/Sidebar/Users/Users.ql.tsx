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
  sendRequest: gql`
    mutation sendChatRequest($receiverId: UUID!) {
      sendChatRequest(sendChatRequestInput: { receiverId: $receiverId }) {
        id
        receiver {
          userId
          username
          requestSent
        }
      }
    }
  `,
}
