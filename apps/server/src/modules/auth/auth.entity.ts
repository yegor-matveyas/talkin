import { InputType, Field, ObjectType } from '@nestjs/graphql'

import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { User } from '../users/users.entity'

@ObjectType()
@Entity()
export class AuthCredentials {
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  accessToken: string

  @Field()
  expiresAt: Date

  @Column()
  refreshToken: string

  @ManyToOne(() => User, (user) => user.credentials)
  user: User
}

@InputType()
export class LoginInput {
  @Field()
  username: string

  @Field()
  password: string
}

@InputType()
export class SignUpInput {
  @Field()
  username: string

  @Field()
  email: string

  @Field()
  password: string
}

export type TAuthCredentials = Omit<AuthCredentials, 'id' | 'user'>

export type TCurrentUser = {
  id: number
  userId: string
  username: string
}
