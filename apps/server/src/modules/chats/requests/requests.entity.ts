import { Field, Int, InputType, ObjectType } from '@nestjs/graphql'

import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { User } from '../../users/users.entity'
import { UUIDScalar } from '../../../graphql/scalars'

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

@InputType()
export class SendChatRequestInput {
  @Field(() => UUIDScalar)
  receiverId: string
}
