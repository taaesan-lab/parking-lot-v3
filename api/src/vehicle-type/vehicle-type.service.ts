import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VehicleType } from './vehicle-type.entity';

@Injectable()
export class VehicleTypeService {
  constructor(
    @InjectRepository(VehicleType) private repo: Repository<VehicleType>,
  ) {}

  findOne(name: string) {
    return this.repo.findOneBy({ name: name });
  }
}
