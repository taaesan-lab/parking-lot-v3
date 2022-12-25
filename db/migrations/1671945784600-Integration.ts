import { MigrationInterface, QueryRunner } from "typeorm";

export class Integration1671945784600 implements MigrationInterface {
    name = 'Integration1671945784600'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_parking_lot" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "address" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_parking_lot"("id", "name", "address") SELECT "id", "name", "address" FROM "parking_lot"`);
        await queryRunner.query(`DROP TABLE "parking_lot"`);
        await queryRunner.query(`ALTER TABLE "temporary_parking_lot" RENAME TO "parking_lot"`);
        await queryRunner.query(`CREATE TABLE "temporary_parking_lot" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "address" varchar)`);
        await queryRunner.query(`INSERT INTO "temporary_parking_lot"("id", "name", "address") SELECT "id", "name", "address" FROM "parking_lot"`);
        await queryRunner.query(`DROP TABLE "parking_lot"`);
        await queryRunner.query(`ALTER TABLE "temporary_parking_lot" RENAME TO "parking_lot"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "parking_lot" RENAME TO "temporary_parking_lot"`);
        await queryRunner.query(`CREATE TABLE "parking_lot" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "address" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "parking_lot"("id", "name", "address") SELECT "id", "name", "address" FROM "temporary_parking_lot"`);
        await queryRunner.query(`DROP TABLE "temporary_parking_lot"`);
        await queryRunner.query(`ALTER TABLE "parking_lot" RENAME TO "temporary_parking_lot"`);
        await queryRunner.query(`CREATE TABLE "parking_lot" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "address" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "parking_lot"("id", "name", "address") SELECT "id", "name", "address" FROM "temporary_parking_lot"`);
        await queryRunner.query(`DROP TABLE "temporary_parking_lot"`);
    }

}
