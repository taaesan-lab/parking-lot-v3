import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
  ManyToOne,
  JoinColumn,
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

  @ManyToOne(() => VehicleType)
  vehicle_type: VehicleType;

  @ManyToOne(() => ParkingFloor, (floor) => floor.parkingSlots)
  floor: ParkingFloor;
}
