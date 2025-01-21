import { InputType, Field, ObjectType } from '@nestjs/graphql'

@InputType()
export class AuthInput {
  @Field()
  username: string

  @Field()
  password: string
}

@ObjectType()
export class AuthResponse {
  @Field()
  access_token: string
}

export type TCurrentUser = {
  userId: string
  username: string
}
