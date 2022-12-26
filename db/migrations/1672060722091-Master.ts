import { MigrationInterface, QueryRunner } from 'typeorm';

export class Master1672060722091 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO vehicle_type(name) values('small')`);
    await queryRunner.query(`INSERT INTO vehicle_type(name) values('medium')`);
    await queryRunner.query(`INSERT INTO vehicle_type(name) values('large')`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
