import { MigrationInterface, QueryRunner } from "typeorm";

export class NamingMigration1690550305736 implements MigrationInterface {
    name = 'Change-Participant-Property-1'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "participant" RENAME COLUMN "testnamee" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "participant" RENAME COLUMN "name" TO "testnamee"`);
    }

}
