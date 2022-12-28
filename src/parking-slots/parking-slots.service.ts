import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ParkingFloor, VehicleType } from 'src/entities';
import { ParkingSlotDto } from 'src/parking-lots/dtos/parking-slot.dto';
import { Repository } from 'typeorm';
import { ParkingSlot } from './parking-slots.entity';

@Injectable()
export class ParkingSlotsService {
  constructor(
    @InjectRepository(ParkingSlot) private repo: Repository<ParkingSlot>,
  ) {}

  create(dto: ParkingSlotDto, floor: ParkingFloor, vehicleType: VehicleType) {
    let parkingSlot = this.repo.create({
      name: dto.name,
      avaliable: dto.avaliable,
    });
    parkingSlot.vehicle_type = vehicleType;
    parkingSlot.floor = floor;
    return this.repo.save(parkingSlot);
  }

  find(avaliable: boolean) {
    //return this.repo.find({ where: { avaliable } });
    return this.repo
      .createQueryBuilder()
      .select('*')
      .where('avaliable=:avaliable', { avaliable })
      .getRawMany();
  }
}
