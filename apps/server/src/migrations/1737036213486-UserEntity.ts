import { MigrationInterface, QueryRunner } from 'typeorm'

export class UserEntity1737036213486 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" (
        id SERIAL PRIMARY KEY,
        userId UUID DEFAULT uuid_generate_v4(),
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
        );`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE "user";`)
  }
}
