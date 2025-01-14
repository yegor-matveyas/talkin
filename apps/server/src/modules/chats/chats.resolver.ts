import { Args, Query, Resolver } from '@nestjs/graphql'
import { ChatsService } from './chats.service'
import { Chat } from './chats.model'

import { UUIDScalar } from '../../graphql/scalars'

@Resolver(() => Chat)
export class ChatsResolver {
  constructor(private readonly chatsService: ChatsService) {}

  @Query(() => Chat, { nullable: true })
  async chat(@Args('id', { type: () => UUIDScalar }) id: string) {
    return this.chatsService.findChatById(id)
  }

  @Query(() => [Chat])
  async chats() {
    return this.chatsService.findChats()
  }
}
