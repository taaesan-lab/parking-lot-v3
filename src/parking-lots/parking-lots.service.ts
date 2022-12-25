import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ParkingLot } from '../entities';
import { CreateParkingLotDto } from './dtos/create-parking-lot.dto';
@Injectable()
export class ParkingLotsService {
  constructor(
    @InjectRepository(ParkingLot) private repo: Repository<ParkingLot>,
  ) {}

  create(dto: CreateParkingLotDto) {
    let parkingLot = this.repo.create({ name: dto.name });
    return this.repo.save(parkingLot);
  }
}
