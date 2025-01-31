import { join } from 'path'

import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AuthModule } from './modules/auth/auth.module'
import { UsersModule } from './modules/users/users.module'
import { MessagesModule } from './modules/messages/messages.module'
import { ChatsModule } from './modules/chats/chats.module'

import { UUIDScalar } from './graphql/scalars'

import { dataSourceOptions } from './typeorm.config'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(dataSourceOptions),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      resolvers: { UUID: UUIDScalar },
      autoSchemaFile: join(process.cwd(), process.env.GRAPHQL_SCHEMA_PATH),
      sortSchema: true,
      context: ({ req, res }) => ({ req, res }),
    }),
    AuthModule,
    UsersModule,
    MessagesModule,
    ChatsModule,
  ],
})
export class AppModule {}
