import { InputType, Int, Field, ObjectType } from '@nestjs/graphql'

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Length, IsEmail } from 'class-validator'

import { UUIDScalar } from '../../graphql/scalars'
import { AuthCredentials } from '../auth/auth.entity'

@ObjectType()
@Entity()
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => UUIDScalar)
  @Column({ generated: 'uuid' })
  userId: string

  @Field()
  @Column({ unique: true, nullable: false })
  @Length(4, 30)
  username: string

  @Field()
  @Column({ unique: true, nullable: false })
  @IsEmail()
  email: string

  @Column()
  password: string

  @OneToMany(() => AuthCredentials, (authCredentials) => authCredentials.user)
  credentials: AuthCredentials[]
}

@InputType()
export class CreateUserInput {
  @Field()
  username: string

  @Field()
  email: string

  @Field()
  password: string
}

@InputType()
export class UserWhereUniqueInput {
  @Field(() => UUIDScalar)
  userId: string
}

@InputType()
export class UsersWhereInput {
  @Field({ nullable: true })
  username?: string
}
