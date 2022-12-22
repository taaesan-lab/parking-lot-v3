import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkingFloor } from '../entities';
import { ParkingFloorsController } from './parking-floors.controller';
import { ParkingFloorsService } from './parking-floors.service';

@Module({
  imports: [TypeOrmModule.forFeature([ParkingFloor])],
  controllers: [ParkingFloorsController],
  providers: [ParkingFloorsService],
})
export class ParkingFloorsModule {}
