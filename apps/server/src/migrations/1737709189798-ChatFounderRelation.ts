import { MigrationInterface, QueryRunner } from "typeorm";

export class ChatFounderRelation1737709189798 implements MigrationInterface {
    name = 'ChatFounderRelation1737709189798'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."message_node_nodetype_enum" RENAME TO "message_node_nodetype_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."message_node_nodetype_enum" AS ENUM('0', '1', '2', '3', '4')`);
        await queryRunner.query(`ALTER TABLE "message_node" ALTER COLUMN "nodeType" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "message_node" ALTER COLUMN "nodeType" TYPE "public"."message_node_nodetype_enum" USING "nodeType"::"text"::"public"."message_node_nodetype_enum"`);
        await queryRunner.query(`ALTER TABLE "message_node" ALTER COLUMN "nodeType" SET DEFAULT '4'`);
        await queryRunner.query(`DROP TYPE "public"."message_node_nodetype_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."message_node_nodetype_enum_old" AS ENUM('0', '1', '2')`);
        await queryRunner.query(`ALTER TABLE "message_node" ALTER COLUMN "nodeType" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "message_node" ALTER COLUMN "nodeType" TYPE "public"."message_node_nodetype_enum_old" USING "nodeType"::"text"::"public"."message_node_nodetype_enum_old"`);
        await queryRunner.query(`ALTER TABLE "message_node" ALTER COLUMN "nodeType" SET DEFAULT '2'`);
        await queryRunner.query(`DROP TYPE "public"."message_node_nodetype_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."message_node_nodetype_enum_old" RENAME TO "message_node_nodetype_enum"`);
    }

}
