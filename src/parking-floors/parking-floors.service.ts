import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ParkingFloor, ParkingLot } from 'src/entities';
import { ParkingFloorDto } from 'src/parking-lots/dtos/parking-floor.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ParkingFloorsService {
  constructor(
    @InjectRepository(ParkingFloor) private repo: Repository<ParkingFloor>,
  ) {}

  create(dto: ParkingFloorDto) {
    let parkingFloor = this.repo.create({ name: dto.name });
    return parkingFloor;
  }
}
