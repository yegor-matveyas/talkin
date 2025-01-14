import { join } from 'path'

import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { ConfigModule } from '@nestjs/config'

import { UUIDScalar } from './graphql/scalars'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      resolvers: { UUID: UUIDScalar },
      autoSchemaFile: join(process.cwd(), process.env.GRAPHQL_SCHEMA_PATH),
      sortSchema: true,
    }),
  ],
})
export class AppModule {}
