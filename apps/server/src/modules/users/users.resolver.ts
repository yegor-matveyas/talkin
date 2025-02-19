import { Inject, UseGuards, forwardRef } from '@nestjs/common'
import { Args, Mutation, Parent, Query, Resolver, ResolveField } from '@nestjs/graphql'

import { AuthGuard, CurrentUser } from '../auth/auth.guard'

import { TCurrentUser } from '../auth/auth.entity'

import { ChatsService } from '../chats/chats.service'
import { Chat } from '../chats/chats.entity'

import { UsersService } from './users.service'
import { User, CreateUserInput, UserWhereUniqueInput, UsersWhereInput } from './users.entity'

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,

    @Inject(forwardRef(() => ChatsService))
    private readonly chatsService: ChatsService
  ) {}

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
  async users(
    @Args('where', { nullable: true }) where: UsersWhereInput,
    @CurrentUser() currentUser: User
  ): Promise<User[]> {
    return this.usersService.getUsers(where, currentUser)
  }

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput): Promise<User> {
    return this.usersService.createUser(createUserInput)
  }

  @ResolveField()
  async chats(@Parent() user: User): Promise<Chat[]> {
    return this.chatsService.getAllByUser(user)
  }
}
