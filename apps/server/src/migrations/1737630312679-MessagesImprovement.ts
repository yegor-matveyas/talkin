import { MigrationInterface, QueryRunner } from "typeorm";

export class MessagesImprovement1737630312679 implements MigrationInterface {
    name = 'MessagesImprovement1737630312679'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "message_node" ADD "messageId" integer`);
        await queryRunner.query(`ALTER TABLE "message" ADD "sentAt" TIMESTAMP WITH TIME ZONE NOT NULL`);
        await queryRunner.query(`ALTER TABLE "message" ADD "senderId" integer`);
        await queryRunner.query(`ALTER TABLE "message_node" ADD CONSTRAINT "FK_a3939c0dfe80008b831d7ec84f3" FOREIGN KEY ("messageId") REFERENCES "message"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "message" ADD CONSTRAINT "FK_bc096b4e18b1f9508197cd98066" FOREIGN KEY ("senderId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "message" DROP CONSTRAINT "FK_bc096b4e18b1f9508197cd98066"`);
        await queryRunner.query(`ALTER TABLE "message_node" DROP CONSTRAINT "FK_a3939c0dfe80008b831d7ec84f3"`);
        await queryRunner.query(`ALTER TABLE "message" DROP COLUMN "senderId"`);
        await queryRunner.query(`ALTER TABLE "message" DROP COLUMN "sentAt"`);
        await queryRunner.query(`ALTER TABLE "message_node" DROP COLUMN "messageId"`);
    }

}
