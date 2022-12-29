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
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  plate_number: string;

  @Column()
  avaliable: boolean;

  @ManyToOne(() => VehicleType)
  vehicle_type: VehicleType;
}
