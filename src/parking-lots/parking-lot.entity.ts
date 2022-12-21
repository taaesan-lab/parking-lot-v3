import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ParkingLot {
    @PrimaryGeneratedColumn()    
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;
}

