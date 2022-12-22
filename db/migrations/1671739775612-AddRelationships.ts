import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRelationships1671739775612 implements MigrationInterface {
    name = 'AddRelationships1671739775612'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "parking_floor" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "parkingLotId" integer)`);
        await queryRunner.query(`CREATE TABLE "temporary_parking_floor" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "parkingLotId" integer, CONSTRAINT "FK_137597a2a2696e70fce84677562" FOREIGN KEY ("parkingLotId") REFERENCES "parking_lot" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_parking_floor"("id", "name", "parkingLotId") SELECT "id", "name", "parkingLotId" FROM "parking_floor"`);
        await queryRunner.query(`DROP TABLE "parking_floor"`);
        await queryRunner.query(`ALTER TABLE "temporary_parking_floor" RENAME TO "parking_floor"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "parking_floor" RENAME TO "temporary_parking_floor"`);
        await queryRunner.query(`CREATE TABLE "parking_floor" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "parkingLotId" integer)`);
        await queryRunner.query(`INSERT INTO "parking_floor"("id", "name", "parkingLotId") SELECT "id", "name", "parkingLotId" FROM "temporary_parking_floor"`);
        await queryRunner.query(`DROP TABLE "temporary_parking_floor"`);
        await queryRunner.query(`DROP TABLE "parking_floor"`);
    }

}
