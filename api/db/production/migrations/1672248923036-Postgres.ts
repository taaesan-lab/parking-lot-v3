import { MigrationInterface, QueryRunner } from "typeorm";

export class Postgres1672248923036 implements MigrationInterface {
    name = 'Postgres1672248923036'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "parking_lot" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "address" character varying, CONSTRAINT "PK_b229703f7e14d1e22981fb35623" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "parking_slot" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "avaliable" boolean NOT NULL, "vehicleTypeId" integer, "floorId" integer, CONSTRAINT "PK_e95575350468d6e392985b2bffb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vehicle_type" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_465137c10960b54f82f1b145e43" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "parking_floor" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "parkingLotId" integer, CONSTRAINT "PK_e1d026a63961c92ee92385fe227" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "parking_slot" ADD CONSTRAINT "FK_693e87daa74cb1b7216b5a39bee" FOREIGN KEY ("vehicleTypeId") REFERENCES "vehicle_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "parking_slot" ADD CONSTRAINT "FK_46eb472c515f5c80f09238c9c4d" FOREIGN KEY ("floorId") REFERENCES "parking_floor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "parking_floor" ADD CONSTRAINT "FK_137597a2a2696e70fce84677562" FOREIGN KEY ("parkingLotId") REFERENCES "parking_lot"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "parking_floor" DROP CONSTRAINT "FK_137597a2a2696e70fce84677562"`);
        await queryRunner.query(`ALTER TABLE "parking_slot" DROP CONSTRAINT "FK_46eb472c515f5c80f09238c9c4d"`);
        await queryRunner.query(`ALTER TABLE "parking_slot" DROP CONSTRAINT "FK_693e87daa74cb1b7216b5a39bee"`);
        await queryRunner.query(`DROP TABLE "parking_floor"`);
        await queryRunner.query(`DROP TABLE "vehicle_type"`);
        await queryRunner.query(`DROP TABLE "parking_slot"`);
        await queryRunner.query(`DROP TABLE "parking_lot"`);
    }

}
