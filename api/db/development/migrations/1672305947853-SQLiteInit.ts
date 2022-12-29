import { MigrationInterface, QueryRunner } from "typeorm";

export class SQLiteInit1672305947853 implements MigrationInterface {
    name = 'SQLiteInit1672305947853'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "parking_floor" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "parking_lot_id" integer)`);
        await queryRunner.query(`CREATE TABLE "parking_slot" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "avaliable" boolean NOT NULL, "vehicle_type_id" integer, "floor_id" integer)`);
        await queryRunner.query(`CREATE TABLE "vehicle_type" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "parking_lot" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "address" varchar)`);
        await queryRunner.query(`CREATE TABLE "vehicle" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "plate_number" varchar NOT NULL, "avaliable" boolean NOT NULL, "vehicle_type_id" integer)`);
        await queryRunner.query(`CREATE TABLE "temporary_parking_floor" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "parking_lot_id" integer, CONSTRAINT "FK_c65ec8d9a0f1d0541c50f78f6b7" FOREIGN KEY ("parking_lot_id") REFERENCES "parking_lot" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_parking_floor"("id", "name", "parking_lot_id") SELECT "id", "name", "parking_lot_id" FROM "parking_floor"`);
        await queryRunner.query(`DROP TABLE "parking_floor"`);
        await queryRunner.query(`ALTER TABLE "temporary_parking_floor" RENAME TO "parking_floor"`);
        await queryRunner.query(`CREATE TABLE "temporary_parking_slot" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "avaliable" boolean NOT NULL, "vehicle_type_id" integer, "floor_id" integer, CONSTRAINT "FK_965eaccffca29f7690f3e41356b" FOREIGN KEY ("vehicle_type_id") REFERENCES "vehicle_type" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_2e3f383ced4b47ba473c0af0bf2" FOREIGN KEY ("floor_id") REFERENCES "parking_floor" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_parking_slot"("id", "name", "avaliable", "vehicle_type_id", "floor_id") SELECT "id", "name", "avaliable", "vehicle_type_id", "floor_id" FROM "parking_slot"`);
        await queryRunner.query(`DROP TABLE "parking_slot"`);
        await queryRunner.query(`ALTER TABLE "temporary_parking_slot" RENAME TO "parking_slot"`);
        await queryRunner.query(`CREATE TABLE "temporary_vehicle" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "plate_number" varchar NOT NULL, "avaliable" boolean NOT NULL, "vehicle_type_id" integer, CONSTRAINT "FK_43835e5d2b1968e9935125fe8e6" FOREIGN KEY ("vehicle_type_id") REFERENCES "vehicle_type" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_vehicle"("id", "plate_number", "avaliable", "vehicle_type_id") SELECT "id", "plate_number", "avaliable", "vehicle_type_id" FROM "vehicle"`);
        await queryRunner.query(`DROP TABLE "vehicle"`);
        await queryRunner.query(`ALTER TABLE "temporary_vehicle" RENAME TO "vehicle"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicle" RENAME TO "temporary_vehicle"`);
        await queryRunner.query(`CREATE TABLE "vehicle" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "plate_number" varchar NOT NULL, "avaliable" boolean NOT NULL, "vehicle_type_id" integer)`);
        await queryRunner.query(`INSERT INTO "vehicle"("id", "plate_number", "avaliable", "vehicle_type_id") SELECT "id", "plate_number", "avaliable", "vehicle_type_id" FROM "temporary_vehicle"`);
        await queryRunner.query(`DROP TABLE "temporary_vehicle"`);
        await queryRunner.query(`ALTER TABLE "parking_slot" RENAME TO "temporary_parking_slot"`);
        await queryRunner.query(`CREATE TABLE "parking_slot" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "avaliable" boolean NOT NULL, "vehicle_type_id" integer, "floor_id" integer)`);
        await queryRunner.query(`INSERT INTO "parking_slot"("id", "name", "avaliable", "vehicle_type_id", "floor_id") SELECT "id", "name", "avaliable", "vehicle_type_id", "floor_id" FROM "temporary_parking_slot"`);
        await queryRunner.query(`DROP TABLE "temporary_parking_slot"`);
        await queryRunner.query(`ALTER TABLE "parking_floor" RENAME TO "temporary_parking_floor"`);
        await queryRunner.query(`CREATE TABLE "parking_floor" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "parking_lot_id" integer)`);
        await queryRunner.query(`INSERT INTO "parking_floor"("id", "name", "parking_lot_id") SELECT "id", "name", "parking_lot_id" FROM "temporary_parking_floor"`);
        await queryRunner.query(`DROP TABLE "temporary_parking_floor"`);
        await queryRunner.query(`DROP TABLE "vehicle"`);
        await queryRunner.query(`DROP TABLE "parking_lot"`);
        await queryRunner.query(`DROP TABLE "vehicle_type"`);
        await queryRunner.query(`DROP TABLE "parking_slot"`);
        await queryRunner.query(`DROP TABLE "parking_floor"`);
    }

}
