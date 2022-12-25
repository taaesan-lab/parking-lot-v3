import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ParkingLot } from 'src/entities';
import { ParkingSlotDto } from 'src/parking-lots/dtos/parking-slot.dto';
import { Repository } from 'typeorm';
import { ParkingSlot } from './parking-slots.entity';

@Injectable()
export class ParkingSlotsService {
  constructor(
    @InjectRepository(ParkingSlot) private repo: Repository<ParkingSlot>,
  ) {}

  create(dto: ParkingSlotDto) {
    // let parkingSlot = this.repo.create({
    //   name: dto.name,
    //   avaliable: dto.avaliable,
    // });
  }
}
