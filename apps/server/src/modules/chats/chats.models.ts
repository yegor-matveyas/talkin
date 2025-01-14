import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql'
import { ChatType } from '@types'

import { Message } from '../messages/messages.models'
import { UUIDScalar } from '../../graphql/scalars'

@ObjectType()
export class Chat {
  @Field(() => ID)
  id: string

  @Field(() => UUIDScalar)
  chatId: string

  @Field(() => ChatType)
  chatType: ChatType

  @Field(() => [Message], { nullable: 'items' })
  messages: Message[]

  @Field(() => Message, { nullable: true })
  pinnedMessage?: Message

  @Field(() => Message, { nullable: true })
  lastUnreadMessage?: Message
}

registerEnumType(ChatType, { name: 'ChatType' })
