import { DataSourceOptions, DataSource } from 'typeorm'

import { AuthCredentials } from './modules/auth/auth.entity'
import { Message } from './modules/messages/messages.entity'
import {
  MessageNode,
  MessageNodeLink,
  MessageNodeMention,
  MessageNodeText,
} from './modules/messages/nodes/nodes.entity'
import { User } from './modules/users/users.entity'

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [AuthCredentials, Message, MessageNode, MessageNodeLink, MessageNodeMention, MessageNodeText, User],
  synchronize: true,
  migrationsRun: true,
}

/** TODO Investigate the problem with file paths for migrations */
const migrationOptions = {
  entities: ['**/*.entity.ts'],
  migrations: ['**/migrations/*.ts'],
}

const migrationDataSource = new DataSource({ ...dataSourceOptions, ...migrationOptions })

export default migrationDataSource
