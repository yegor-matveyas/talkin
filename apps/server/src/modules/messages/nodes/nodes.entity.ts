import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql'
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

import { MessageNodeStyle, MessageNodeType } from '@types'

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

registerEnumType(MessageNodeStyle, { name: 'MessageNodeStyle' })
registerEnumType(MessageNodeType, { name: 'MessageNodeType' })
