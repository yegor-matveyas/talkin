import { MigrationInterface, QueryRunner } from "typeorm";

export class AuthCredentials1737537170066 implements MigrationInterface {
    name = 'AuthCredentials1737537170066'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "auth_credentials" ("id" SERIAL NOT NULL, "refreshToken" character varying NOT NULL, "userId" integer, CONSTRAINT "PK_90fdced0865b5f15586e7cd3b25" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "auth_credentials" ADD CONSTRAINT "FK_964477383142d490de70b671f77" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "auth_credentials" DROP CONSTRAINT "FK_964477383142d490de70b671f77"`);
        await queryRunner.query(`DROP TABLE "auth_credentials"`);
    }

}
