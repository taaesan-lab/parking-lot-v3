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
    this.repo.create(dto);
  }
}
