import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { AuthGuard, CurrentUser } from '../auth/auth.guard'

import { TCurrentUser } from '../auth/auth.entity'

import { UsersService } from './users.service'
import { User, CreateUserInput, UserWhereUniqueInput, UsersWhereInput } from './users.entity'

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard)
  @Query(() => User)
  async me(@CurrentUser() currentUser: TCurrentUser): Promise<User> {
    return this.usersService.getOneByUserId(currentUser.userId)
  }

  @UseGuards(AuthGuard)
  @Query(() => User)
  async user(@Args('where') where: UserWhereUniqueInput): Promise<User> {
    return this.usersService.getOneByUserId(where.userId)
  }

  @UseGuards(AuthGuard)
  @Query(() => [User], { nullable: true })
  async users(@Args('where', { nullable: true }) where: UsersWhereInput): Promise<User[]> {
    return this.usersService.getUsers(where)
  }

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput): Promise<User> {
    return this.usersService.createUser(createUserInput)
  }
}
