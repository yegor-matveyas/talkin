import { Field, Int, ObjectType } from '@nestjs/graphql'

import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { User } from '../../users/users.entity'

@ObjectType()
@Entity()
export class ChatRequest {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => User)
  @ManyToOne(() => User, (sender) => sender.sentChatRequests)
  sender: User

  @Field(() => User)
  @ManyToOne(() => User, (receiver) => receiver.receivedChatRequests)
  receiver: User
}
