import {MigrationInterface, QueryRunner} from "typeorm";

export class init1639408287479 implements MigrationInterface {
    name = 'init1639408287479'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "service" DROP COLUMN "rating_quantity"`);
        await queryRunner.query(`ALTER TABLE "service" ADD "rating_quantity" bigint NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "service" DROP COLUMN "rating_quantity"`);
        await queryRunner.query(`ALTER TABLE "service" ADD "rating_quantity" integer NOT NULL DEFAULT '0'`);
    }

}
