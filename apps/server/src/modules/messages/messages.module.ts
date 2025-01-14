import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { MessagesService } from './messages.service'
import { MessagesResolver } from './messages.resolver'

import { Message } from './messages.entity'
@Module({
  providers: [MessagesResolver, MessagesService],
  imports: [TypeOrmModule.forFeature([Message])],
  exports: [TypeOrmModule],
})
export class MessagesModule {}
