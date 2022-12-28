import { ParkingSlot } from 'src/entities';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class VehicleType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
