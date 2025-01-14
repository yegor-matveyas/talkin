import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql'
import { MessageNodeStyle, MessageNodeType } from '@types'

import { UUIDScalar } from '../../graphql/scalars'

@ObjectType()
export class Message {
  @Field(() => ID)
  id: string

  @Field(() => UUIDScalar)
  messageId: string

  @Field(() => [MessageNode])
  nodes: MessageNode[]
}

@ObjectType()
export class MessageNode {
  @Field(() => ID)
  id: string

  @Field(() => MessageNodeType)
  nodeType: MessageNodeType

  @Field(() => MessageNodeStyle, { nullable: true })
  style?: MessageNodeStyle

  @Field({ nullable: true })
  link?: string

  @Field({ nullable: true })
  text?: string

  @Field(() => Message)
  message: Message
}

registerEnumType(MessageNodeStyle, { name: 'MessageNodeStyle' })
registerEnumType(MessageNodeType, { name: 'MessageNodeType' })
