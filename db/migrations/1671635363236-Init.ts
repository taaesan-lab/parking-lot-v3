import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1671635363236 implements MigrationInterface {
    name = 'Init1671635363236'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "parking_lot" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "address" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "parking_lot"`);
    }

}
