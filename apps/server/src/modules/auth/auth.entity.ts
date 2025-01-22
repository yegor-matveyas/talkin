import { InputType, Field, ObjectType } from '@nestjs/graphql'

import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { User } from '../users/users.entity'

@InputType()
export class AuthInput {
  @Field()
  username: string

  @Field()
  password: string
}

@ObjectType()
@Entity()
export class AuthCredentials {
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  accessToken: string

  @Field()
  expiresAt: Date

  @Field()
  @Column()
  refreshToken: string

  @ManyToOne(() => User, (user) => user.credentials)
  user: User
}

export type TAuthCredentials = Omit<AuthCredentials, 'id' | 'user'>

export type TCurrentUser = {
  userId: string
  username: string
}
