import { MigrationInterface, QueryRunner } from "typeorm";

export class ParkingSlot1671859436002 implements MigrationInterface {
    name = 'ParkingSlot1671859436002'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vehicle_type" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "parking_slot" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "avaliable" boolean NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "parking_slot"`);
        await queryRunner.query(`DROP TABLE "vehicle_type"`);
    }

}
