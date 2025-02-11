import { MigrationInterface, QueryRunner } from "typeorm";

export class ChatRequest1739270649162 implements MigrationInterface {
    name = 'ChatRequest1739270649162'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "chat_request" ("id" SERIAL NOT NULL, "senderId" integer, "receiverId" integer, CONSTRAINT "PK_6f64232d94659df0614c80ffd79" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "chat_request" ADD CONSTRAINT "FK_9ff89558e578ff2cfe81273db57" FOREIGN KEY ("senderId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chat_request" ADD CONSTRAINT "FK_7a1968eef3bc0435f6197f30df4" FOREIGN KEY ("receiverId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chat_request" DROP CONSTRAINT "FK_7a1968eef3bc0435f6197f30df4"`);
        await queryRunner.query(`ALTER TABLE "chat_request" DROP CONSTRAINT "FK_9ff89558e578ff2cfe81273db57"`);
        await queryRunner.query(`DROP TABLE "chat_request"`);
    }

}
