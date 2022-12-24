import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { VehicleType } from '../entities';
@Entity()
export class ParkingSlot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  avaliable: boolean;

  @OneToOne(() => VehicleType)
  type: VehicleType;
}
