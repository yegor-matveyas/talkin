import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UsersService } from './users.service'

import { User, CreateUserInput } from './users.entity'

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { nullable: true })
  async users() {
    return this.usersService.getUsers()
  }

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput): Promise<User> {
    return this.usersService.createUser(createUserInput)
  }
}
