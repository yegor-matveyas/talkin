import { Args, Query, Resolver } from '@nestjs/graphql'
import { ChatsService } from './chats.service'
import { Chat } from './chats.models'

import { UUIDScalar } from '../../graphql/scalars'

@Resolver(() => Chat)
export class ChatsResolver {
  constructor(private readonly chatsService: ChatsService) {}

  @Query(() => Chat)
  async chat(@Args('id', { type: () => UUIDScalar }) id: string) {
    return this.chatsService.findChatById(id)
  }

  @Query(() => [Chat])
  async chats() {
    return this.chatsService.findChats()
  }
}
