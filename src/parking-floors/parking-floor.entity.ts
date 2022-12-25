import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ParkingLot, ParkingSlot } from 'src/entities';

@Entity()
export class ParkingFloor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => ParkingLot, (parkingLot) => parkingLot.floors)
  parkingLot: ParkingLot;

  @OneToMany(() => ParkingSlot, (lot) => lot.floor)
  parkingSlots: ParkingSlot[];
}
