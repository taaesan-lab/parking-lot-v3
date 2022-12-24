import { MigrationInterface, QueryRunner } from 'typeorm';

export class MasterData1671862524153 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO vehicle_type(name) VALUES('small') `);
    await queryRunner.query(`INSERT INTO vehicle_type(name) VALUES('medium') `);
    await queryRunner.query(`INSERT INTO vehicle_type(name) VALUES('large') `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
