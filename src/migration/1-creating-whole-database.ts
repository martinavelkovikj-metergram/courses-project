import { MigrationInterface, QueryRunner } from "typeorm";

export class DatabaseCreatingMigration1690555680651 implements MigrationInterface {
    name = 'DatabaseCreatingMigration1690555680651'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "company" ("company_id" SERIAL NOT NULL, "name" character varying NOT NULL, "phone_number" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_b7f9888ba8bd654c4860ddfcb3a" PRIMARY KEY ("company_id"))`);
        await queryRunner.query(`CREATE TABLE "participant" ("participant_id" SERIAL NOT NULL, "name" character varying NOT NULL, "phone_number" character varying NOT NULL, "email" character varying NOT NULL, "companyCompanyId" integer, CONSTRAINT "PK_389013d0d0a8cd76f64a767f2fa" PRIMARY KEY ("participant_id"))`);
        await queryRunner.query(`CREATE TABLE "course" ("course_id" integer NOT NULL, "date" TIMESTAMP NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_db5aa5e03747fd7f707abe48bcf" PRIMARY KEY ("course_id", "date"))`);
        await queryRunner.query(`CREATE TABLE "application" ("application_id" SERIAL NOT NULL, "companyCompanyId" integer, "courseCourseId" integer, "courseDate" TIMESTAMP, CONSTRAINT "PK_086e16ea19242fc5a8a1e9ed42d" PRIMARY KEY ("application_id"))`);
        await queryRunner.query(`CREATE TABLE "application_participants_participant" ("applicationApplicationId" integer NOT NULL, "participantParticipantId" integer NOT NULL, CONSTRAINT "PK_e8e4ed5214cb0ed44cddbedbc9f" PRIMARY KEY ("applicationApplicationId", "participantParticipantId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_637e715885ca93c9ba15a1d37f" ON "application_participants_participant" ("applicationApplicationId") `);
        await queryRunner.query(`CREATE INDEX "IDX_db61eb63b339118dedbe9307e2" ON "application_participants_participant" ("participantParticipantId") `);
        await queryRunner.query(`ALTER TABLE "participant" ADD CONSTRAINT "FK_f2cc37d197220c1e0050bcbd94c" FOREIGN KEY ("companyCompanyId") REFERENCES "company"("company_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "application" ADD CONSTRAINT "FK_520b08069ba71e678457f2d037d" FOREIGN KEY ("companyCompanyId") REFERENCES "company"("company_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "application" ADD CONSTRAINT "FK_cd0381cc833ebcc6ac6b00228a8" FOREIGN KEY ("courseCourseId", "courseDate") REFERENCES "course"("course_id","date") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "application_participants_participant" ADD CONSTRAINT "FK_637e715885ca93c9ba15a1d37f0" FOREIGN KEY ("applicationApplicationId") REFERENCES "application"("application_id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "application_participants_participant" ADD CONSTRAINT "FK_db61eb63b339118dedbe9307e27" FOREIGN KEY ("participantParticipantId") REFERENCES "participant"("participant_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "application_participants_participant" DROP CONSTRAINT "FK_db61eb63b339118dedbe9307e27"`);
        await queryRunner.query(`ALTER TABLE "application_participants_participant" DROP CONSTRAINT "FK_637e715885ca93c9ba15a1d37f0"`);
        await queryRunner.query(`ALTER TABLE "application" DROP CONSTRAINT "FK_cd0381cc833ebcc6ac6b00228a8"`);
        await queryRunner.query(`ALTER TABLE "application" DROP CONSTRAINT "FK_520b08069ba71e678457f2d037d"`);
        await queryRunner.query(`ALTER TABLE "participant" DROP CONSTRAINT "FK_f2cc37d197220c1e0050bcbd94c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_db61eb63b339118dedbe9307e2"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_637e715885ca93c9ba15a1d37f"`);
        await queryRunner.query(`DROP TABLE "application_participants_participant"`);
        await queryRunner.query(`DROP TABLE "application"`);
        await queryRunner.query(`DROP TABLE "course"`);
        await queryRunner.query(`DROP TABLE "participant"`);
        await queryRunner.query(`DROP TABLE "company"`);
    }

}
