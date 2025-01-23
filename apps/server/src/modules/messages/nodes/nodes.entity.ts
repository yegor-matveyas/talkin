import { Field, InputType, Int, ObjectType, registerEnumType } from '@nestjs/graphql'
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

import { MessageNodeStyle, MessageNodeType } from '@types'

import { UUIDScalar } from '../../../graphql/scalars'

import { User } from '../../users/users.entity'

import { Message } from '../messages.entity'

@ObjectType()
@Entity()
export class MessageNode {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => MessageNodeType)
  @Column({
    type: 'enum',
    enum: MessageNodeType,
    default: MessageNodeType.TEXT,
  })
  nodeType: MessageNodeType

  @Field(() => MessageNodeStyle, { nullable: true })
  @Column({
    type: 'enum',
    enum: MessageNodeStyle,
    nullable: true,
  })
  style?: MessageNodeStyle

  @Field({ nullable: true })
  link?: string

  @Field({ nullable: true })
  text?: string

  @Field(() => User, { nullable: true })
  mention?: User

  @Field(() => Message)
  @ManyToOne(() => Message, (message) => message.nodes)
  message: Message
}

@Entity()
export class MessageNodeText {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  text: string

  @OneToOne(() => MessageNode)
  @JoinColumn()
  node: MessageNode
}

@Entity()
export class MessageNodeLink {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  link: string

  @OneToOne(() => MessageNode)
  @JoinColumn()
  node: MessageNode
}

@Entity()
export class MessageNodeMention {
  @PrimaryGeneratedColumn()
  id: string

  @OneToOne(() => MessageNode)
  @JoinColumn()
  node: MessageNode

  @ManyToOne(() => User, (user) => user.messageMentions)
  user: User
}

@InputType()
export class MessageNodeInput {
  @Field(() => MessageNodeType)
  nodeType: MessageNodeType

  @Field(() => MessageNodeStyle, { nullable: true })
  style?: MessageNodeStyle

  @Field({ nullable: true })
  link?: string

  @Field({ nullable: true })
  text?: string

  @Field(() => UUIDScalar, { nullable: true })
  mentionId?: string
}

registerEnumType(MessageNodeStyle, { name: 'MessageNodeStyle' })
registerEnumType(MessageNodeType, { name: 'MessageNodeType' })
