import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkingFloorsService } from 'src/parking-floors/parking-floors.service';
import { ParkingSlotsService } from 'src/parking-slots/parking-slots.service';
import { VehicleTypeService } from 'src/vehicle-type/vehicle-type.service';
import {
  ParkingFloor,
  ParkingLot,
  ParkingSlot,
  VehicleType,
} from '../entities';
import { ParkingLotsController } from './parking-lots.controller';
import { ParkingLotsService } from './parking-lots.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ParkingLot,
      ParkingFloor,
      ParkingSlot,
      VehicleType,
    ]),
  ],
  controllers: [ParkingLotsController],
  providers: [
    ParkingLotsService,
    ParkingFloorsService,
    ParkingSlotsService,
    VehicleTypeService,
  ],
})
export class ParkingLotsModule {}
