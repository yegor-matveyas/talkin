import { DataSourceOptions, DataSource } from 'typeorm'

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  entities: ['**/*.entity.{js, ts}'],

  synchronize: process.env.DB_SYNCHRONIZE === 'true',

  migrations: ['migrations/*.ts'],
  migrationsRun: true,
}

const dataSource = new DataSource(dataSourceOptions)

export default dataSource
