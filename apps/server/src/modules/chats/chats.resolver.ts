import { Args, Mutation, Resolver } from '@nestjs/graphql'

import { CurrentUser } from '../auth/auth.guard'
import { User } from '../users/users.entity'

import { ChatsService } from './chats.service'
import { Chat, CreateChatInput } from './chats.entity'

@Resolver(() => Chat)
export class ChatsResolver {
  constructor(private readonly chatsService: ChatsService) {}

  @Mutation(() => Chat)
  async createChat(
    @Args('createChatInput') createChatInput: CreateChatInput,
    @CurrentUser() currentUser: User
  ): Promise<Chat> {
    return await this.chatsService.createChat(createChatInput, currentUser)
  }
}
