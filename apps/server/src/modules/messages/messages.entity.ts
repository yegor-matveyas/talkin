import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

import { UUIDScalar } from '../../graphql/scalars'

import { MessageNode } from './nodes/nodes.entity'

@ObjectType()
@Entity()
export class Message {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => UUIDScalar)
  @Column({ generated: 'uuid' })
  messageId: string

  @Field(() => [MessageNode])
  nodes: MessageNode[]
}
