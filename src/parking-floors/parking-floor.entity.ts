import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ParkingLot } from 'src/entities';

@Entity()
export class ParkingFloor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => ParkingLot, (parkingLot) => parkingLot.floors)
  parkingLot: ParkingLot;
}
