import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { MessagesService } from './messages.service'
import { MessagesResolver } from './messages.resolver'

import { Message } from './messages.entity'
import { MessageNode, MessageNodeLink, MessageNodeMention, MessageNodeText } from './nodes/nodes.entity'
import { NodesResolver } from './nodes/nodes.resolver'

@Module({
  imports: [TypeOrmModule.forFeature([Message, MessageNode, MessageNodeLink, MessageNodeMention, MessageNodeText])],
  providers: [MessagesResolver, NodesResolver, MessagesService],
  exports: [TypeOrmModule],
})
export class MessagesModule {}
