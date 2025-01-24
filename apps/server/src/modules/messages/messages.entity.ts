import { Field, InputType, Int, ObjectType, registerEnumType } from '@nestjs/graphql'

import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm'

import { MessageType } from '@types'

import { UUIDScalar } from '../../graphql/scalars'

import { Chat } from '../chats/chats.entity'
import { User } from '../users/users.entity'
import { MessageNode, MessageNodeInput } from './nodes/nodes.entity'

@ObjectType()
@Entity()
export class Message {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => UUIDScalar)
  @Column({ generated: 'uuid' })
  messageId: string

  @Field()
  @Column({ type: 'timestamptz' })
  sentAt: Date

  @Field(() => MessageType)
  messageType: MessageType

  @Field(() => Chat)
  @ManyToOne(() => Chat, (chat) => chat.messages)
  chat: Chat

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.messages)
  sender: User

  @Field(() => [MessageNode])
  @OneToMany(() => MessageNode, (node) => node.message)
  nodes: MessageNode[]
}

@InputType()
export class SendMessageInput {
  @Field(() => UUIDScalar)
  chatId: string

  @Field(() => UUIDScalar)
  senderId: string

  @Field(() => [MessageNodeInput])
  nodes: MessageNodeInput[]
}

registerEnumType(MessageType, { name: 'MessageType' })
