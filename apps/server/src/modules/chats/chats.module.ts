import { Module, forwardRef } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { MessagesModule } from '../messages/messages.module'
import { UsersModule } from '../users/users.module'

import { ChatsService } from './chats.service'
import { ChatsResolver } from './chats.resolver'
import { Chat } from './chats.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Chat]), UsersModule, forwardRef(() => MessagesModule)],
  providers: [ChatsResolver, ChatsService],
  exports: [TypeOrmModule, ChatsService],
})
export class ChatsModule {}
