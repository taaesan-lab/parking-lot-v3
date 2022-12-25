import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { ParkingFloor, VehicleType } from '../entities';
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

  @OneToMany(() => ParkingFloor, (floor) => floor.parkingSlots)
  floor: ParkingFloor;
}
