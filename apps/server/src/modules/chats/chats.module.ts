import { Module, forwardRef } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { MessagesModule } from '../messages/messages.module'
import { UsersModule } from '../users/users.module'

import { ChatsService } from './chats.service'
import { ChatsResolver } from './chats.resolver'
import { Chat } from './chats.entity'
import { ChatRequest } from './requests/requests.entity'
import { ChatRequestsResolver } from './requests/requests.resolver'
import { ChatRequestsService } from './requests/requests.service'

@Module({
  imports: [TypeOrmModule.forFeature([Chat, ChatRequest]), UsersModule, forwardRef(() => MessagesModule)],
  providers: [ChatsResolver, ChatRequestsResolver, ChatsService, ChatRequestsService],
  exports: [TypeOrmModule, ChatsService],
})
export class ChatsModule {}
