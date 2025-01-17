import { join } from 'path'

import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ChatsModule } from './modules/chats/chats.module'
import { MessagesModule } from './modules/messages/messages.module'

import { UUIDScalar } from './graphql/scalars'
import { UsersModule } from './modules/users/users.module'

import { dataSourceOptions } from './ormconfig'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(dataSourceOptions),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      resolvers: { UUID: UUIDScalar },
      autoSchemaFile: join(process.cwd(), process.env.GRAPHQL_SCHEMA_PATH),
      sortSchema: true,
    }),
    ChatsModule,
    MessagesModule,
    UsersModule,
  ],
})
export class AppModule {}
