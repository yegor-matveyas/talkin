import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { MessagesModule } from '../messages/messages.module'

import { ChatsService } from './chats.service'
import { ChatsResolver } from './chats.resolver'
import { Chat } from './chats.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Chat]), MessagesModule],
  providers: [ChatsResolver, ChatsService],
})
export class ChatsModule {}
