import { join } from 'path'

import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ChatsModule } from './modules/chats/chats.module'
import { MessagesModule } from './modules/messages/messages.module'

import { Chat as ChatEntity } from './modules/chats/chats.entity'
import { Message as MessageEntity } from './modules/messages/messages.entity'

import { UUIDScalar } from './graphql/scalars'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [ChatEntity, MessageEntity],
      synchronize: process.env.DB_SYNCHRONIZE === 'true',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      resolvers: { UUID: UUIDScalar },
      autoSchemaFile: join(process.cwd(), process.env.GRAPHQL_SCHEMA_PATH),
      sortSchema: true,
    }),
    ChatsModule,
    MessagesModule,
  ],
})
export class AppModule {}
