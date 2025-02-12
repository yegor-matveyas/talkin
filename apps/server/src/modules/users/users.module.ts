import { Module, forwardRef } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ChatsModule } from '../chats/chats.module'

import { UsersService } from './users.service'
import { UsersResolver } from './users.resolver'

import { User } from './users.entity'

@Module({
  imports: [TypeOrmModule.forFeature([User]), forwardRef(() => ChatsModule)],
  providers: [UsersResolver, UsersService],
  exports: [UsersService, TypeOrmModule],
})
export class UsersModule {}
