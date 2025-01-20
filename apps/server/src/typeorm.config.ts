import { DataSourceOptions, DataSource } from 'typeorm'

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['modules/**/*.entity.ts'],
  synchronize: true,
  migrations: ['migrations/*.ts'],
  migrationsRun: true,
}

/** TODO Investigate the problem with file paths for migrations */
const migrationOptions = {
  entities: ['**/*.entity.ts'],
  migrations: ['**/migrations/*.ts'],
}

const migrationDataSource = new DataSource({ ...dataSourceOptions, ...migrationOptions })

export default migrationDataSource
