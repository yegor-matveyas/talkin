import { Resolver } from '@nestjs/graphql'

import { ChatsService } from './chats.service'
import { Chat } from './chats.entity'

@Resolver(() => Chat)
export class ChatsResolver {
  constructor(private readonly chatsService: ChatsService) {}
}
