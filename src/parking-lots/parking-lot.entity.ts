import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ParkingFloor } from "src/entities";
@Entity()
export class ParkingLot {
    @PrimaryGeneratedColumn()    
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @OneToMany(()=> ParkingFloor, (floor)=> floor.parkingLot)
    floors: ParkingFloor
}

