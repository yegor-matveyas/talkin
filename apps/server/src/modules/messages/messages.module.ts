import { Module, forwardRef } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UsersModule } from '../users/users.module'

import { MessageNode, MessageNodeLink, MessageNodeMention, MessageNodeText } from './nodes/nodes.entity'
import { NodesResolver } from './nodes/nodes.resolver'
import { NodesService } from './nodes/nodes.service'
import { ChatsModule } from '../chats/chats.module'

import { MessagesService } from './messages.service'
import { MessagesResolver } from './messages.resolver'
import { Message } from './messages.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([Message, MessageNode, MessageNodeLink, MessageNodeMention, MessageNodeText]),
    UsersModule,
    forwardRef(() => ChatsModule),
  ],
  providers: [MessagesResolver, NodesResolver, MessagesService, NodesService],
  exports: [TypeOrmModule, MessagesService, NodesService],
})
export class MessagesModule {}
