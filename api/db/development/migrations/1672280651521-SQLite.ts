import { MigrationInterface, QueryRunner } from "typeorm";

export class SQLite1672280651521 implements MigrationInterface {
    name = 'SQLite1672280651521'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "parking_lot" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "address" varchar)`);
        await queryRunner.query(`CREATE TABLE "parking_slot" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "avaliable" boolean NOT NULL, "vehicleTypeId" integer, "floorId" integer)`);
        await queryRunner.query(`CREATE TABLE "vehicle_type" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "parking_floor" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "parkingLotId" integer)`);
        await queryRunner.query(`CREATE TABLE "temporary_parking_slot" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "avaliable" boolean NOT NULL, "vehicleTypeId" integer, "floorId" integer, CONSTRAINT "FK_693e87daa74cb1b7216b5a39bee" FOREIGN KEY ("vehicleTypeId") REFERENCES "vehicle_type" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_46eb472c515f5c80f09238c9c4d" FOREIGN KEY ("floorId") REFERENCES "parking_floor" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_parking_slot"("id", "name", "avaliable", "vehicleTypeId", "floorId") SELECT "id", "name", "avaliable", "vehicleTypeId", "floorId" FROM "parking_slot"`);
        await queryRunner.query(`DROP TABLE "parking_slot"`);
        await queryRunner.query(`ALTER TABLE "temporary_parking_slot" RENAME TO "parking_slot"`);
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
        await queryRunner.query(`ALTER TABLE "parking_slot" RENAME TO "temporary_parking_slot"`);
        await queryRunner.query(`CREATE TABLE "parking_slot" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "avaliable" boolean NOT NULL, "vehicleTypeId" integer, "floorId" integer)`);
        await queryRunner.query(`INSERT INTO "parking_slot"("id", "name", "avaliable", "vehicleTypeId", "floorId") SELECT "id", "name", "avaliable", "vehicleTypeId", "floorId" FROM "temporary_parking_slot"`);
        await queryRunner.query(`DROP TABLE "temporary_parking_slot"`);
        await queryRunner.query(`DROP TABLE "parking_floor"`);
        await queryRunner.query(`DROP TABLE "vehicle_type"`);
        await queryRunner.query(`DROP TABLE "parking_slot"`);
        await queryRunner.query(`DROP TABLE "parking_lot"`);
    }

}
