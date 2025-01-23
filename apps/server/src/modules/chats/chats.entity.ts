import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql'

import { Column, Entity, JoinTable, JoinColumn, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

import { ChatType } from '@types'

import { UUIDScalar } from '../../graphql/scalars'

import { Message } from '../messages/messages.entity'
import { User } from '../users/users.entity'

@ObjectType()
@Entity()
export class Chat {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => UUIDScalar)
  @Column({ generated: 'uuid' })
  chatId: string

  @Field(() => ChatType)
  @Column({
    type: 'enum',
    enum: ChatType,
    default: ChatType.DEFAULT,
  })
  chatType: ChatType

  @Field(() => [User])
  @ManyToMany(() => User)
  @JoinTable({ name: 'chat_member' })
  members: User[]

  @Field(() => [Message], { nullable: 'items' })
  @OneToMany(() => Message, (message) => message.chat)
  messages: Message[]

  @Field(() => Message, { nullable: true })
  @OneToOne(() => Message, { nullable: true })
  @JoinColumn()
  pinnedMessage?: Message

  @Field(() => Message, { nullable: true })
  @OneToOne(() => Message, { nullable: true })
  @JoinColumn()
  lastUnreadMessage?: Message
}

registerEnumType(ChatType, { name: 'ChatType' })
