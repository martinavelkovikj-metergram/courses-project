import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1690549821071 implements MigrationInterface {
    name = 'Init-Migration-1-1690549821071'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "participant" RENAME COLUMN "name" TO "testnamee"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "participant" RENAME COLUMN "testnamee" TO "name"`);
    }

}
