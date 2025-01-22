import { MigrationInterface, QueryRunner } from "typeorm";

export class Messages1737560045561 implements MigrationInterface {
    name = 'Messages1737560045561'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "message" ("id" SERIAL NOT NULL, "messageId" uuid NOT NULL DEFAULT uuid_generate_v4(), CONSTRAINT "PK_ba01f0a3e0123651915008bc578" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."message_node_nodetype_enum" AS ENUM('0', '1', '2')`);
        await queryRunner.query(`CREATE TYPE "public"."message_node_style_enum" AS ENUM('0', '1')`);
        await queryRunner.query(`CREATE TABLE "message_node" ("id" SERIAL NOT NULL, "nodeType" "public"."message_node_nodetype_enum" NOT NULL DEFAULT '2', "style" "public"."message_node_style_enum", CONSTRAINT "PK_a86d503a4ebcc2e0ae7a35b8160" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "message_node_text" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, "nodeId" integer, CONSTRAINT "REL_b59b97efd6507917e03becff51" UNIQUE ("nodeId"), CONSTRAINT "PK_e778591ba0471df4e7f762b0d9c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "message_node_link" ("id" SERIAL NOT NULL, "link" character varying NOT NULL, "nodeId" integer, CONSTRAINT "REL_1dcb016ac4bcbc4bec3afe0dbf" UNIQUE ("nodeId"), CONSTRAINT "PK_7686cba32a543f9fd3ef699b6b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "message_node_mention" ("id" SERIAL NOT NULL, "nodeId" integer, "userId" integer, CONSTRAINT "REL_d5ced8f13cf3c2ac7939363a3a" UNIQUE ("nodeId"), CONSTRAINT "PK_8d7d5eb27d55ad4deb1282935fc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "message_node_text" ADD CONSTRAINT "FK_b59b97efd6507917e03becff514" FOREIGN KEY ("nodeId") REFERENCES "message_node"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "message_node_link" ADD CONSTRAINT "FK_1dcb016ac4bcbc4bec3afe0dbf3" FOREIGN KEY ("nodeId") REFERENCES "message_node"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "message_node_mention" ADD CONSTRAINT "FK_d5ced8f13cf3c2ac7939363a3af" FOREIGN KEY ("nodeId") REFERENCES "message_node"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "message_node_mention" ADD CONSTRAINT "FK_21e2bfc1323a74d639995474aac" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "message_node_mention" DROP CONSTRAINT "FK_21e2bfc1323a74d639995474aac"`);
        await queryRunner.query(`ALTER TABLE "message_node_mention" DROP CONSTRAINT "FK_d5ced8f13cf3c2ac7939363a3af"`);
        await queryRunner.query(`ALTER TABLE "message_node_link" DROP CONSTRAINT "FK_1dcb016ac4bcbc4bec3afe0dbf3"`);
        await queryRunner.query(`ALTER TABLE "message_node_text" DROP CONSTRAINT "FK_b59b97efd6507917e03becff514"`);
        await queryRunner.query(`DROP TABLE "message_node_mention"`);
        await queryRunner.query(`DROP TABLE "message_node_link"`);
        await queryRunner.query(`DROP TABLE "message_node_text"`);
        await queryRunner.query(`DROP TABLE "message_node"`);
        await queryRunner.query(`DROP TYPE "public"."message_node_style_enum"`);
        await queryRunner.query(`DROP TYPE "public"."message_node_nodetype_enum"`);
        await queryRunner.query(`DROP TABLE "message"`);
    }

}
