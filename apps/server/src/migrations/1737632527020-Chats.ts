import { MigrationInterface, QueryRunner } from "typeorm";

export class Chats1737632527020 implements MigrationInterface {
    name = 'Chats1737632527020'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."chat_chattype_enum" AS ENUM('0', '1')`);
        await queryRunner.query(`CREATE TABLE "chat" ("id" SERIAL NOT NULL, "chatId" uuid NOT NULL DEFAULT uuid_generate_v4(), "chatType" "public"."chat_chattype_enum" NOT NULL DEFAULT '0', "pinnedMessageId" integer, "lastUnreadMessageId" integer, CONSTRAINT "REL_78ecc32374730a99c15178fb41" UNIQUE ("pinnedMessageId"), CONSTRAINT "REL_5d202b0573c4ea78b7ac9113fd" UNIQUE ("lastUnreadMessageId"), CONSTRAINT "PK_9d0b2ba74336710fd31154738a5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "chat_member" ("chatId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_19ebaef9771578d9922a3291b82" PRIMARY KEY ("chatId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_92e48cf204fcce7febc738c8d6" ON "chat_member" ("chatId") `);
        await queryRunner.query(`CREATE INDEX "IDX_0b7f67b9d8726c419922462e84" ON "chat_member" ("userId") `);
        await queryRunner.query(`ALTER TABLE "message" ADD "chatId" integer`);
        await queryRunner.query(`ALTER TABLE "chat" ADD CONSTRAINT "FK_78ecc32374730a99c15178fb41b" FOREIGN KEY ("pinnedMessageId") REFERENCES "message"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chat" ADD CONSTRAINT "FK_5d202b0573c4ea78b7ac9113fdd" FOREIGN KEY ("lastUnreadMessageId") REFERENCES "message"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "message" ADD CONSTRAINT "FK_619bc7b78eba833d2044153bacc" FOREIGN KEY ("chatId") REFERENCES "chat"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chat_member" ADD CONSTRAINT "FK_92e48cf204fcce7febc738c8d6f" FOREIGN KEY ("chatId") REFERENCES "chat"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "chat_member" ADD CONSTRAINT "FK_0b7f67b9d8726c419922462e848" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chat_member" DROP CONSTRAINT "FK_0b7f67b9d8726c419922462e848"`);
        await queryRunner.query(`ALTER TABLE "chat_member" DROP CONSTRAINT "FK_92e48cf204fcce7febc738c8d6f"`);
        await queryRunner.query(`ALTER TABLE "message" DROP CONSTRAINT "FK_619bc7b78eba833d2044153bacc"`);
        await queryRunner.query(`ALTER TABLE "chat" DROP CONSTRAINT "FK_5d202b0573c4ea78b7ac9113fdd"`);
        await queryRunner.query(`ALTER TABLE "chat" DROP CONSTRAINT "FK_78ecc32374730a99c15178fb41b"`);
        await queryRunner.query(`ALTER TABLE "message" DROP COLUMN "chatId"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0b7f67b9d8726c419922462e84"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_92e48cf204fcce7febc738c8d6"`);
        await queryRunner.query(`DROP TABLE "chat_member"`);
        await queryRunner.query(`DROP TABLE "chat"`);
        await queryRunner.query(`DROP TYPE "public"."chat_chattype_enum"`);
    }

}
