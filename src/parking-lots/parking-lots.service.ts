import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ParkingLot } from '../entities';
@Injectable()
export class ParkingLotsService {
  constructor(
    @InjectRepository(ParkingLot) private repo: Repository<ParkingLot>,
  ) {}
}
