import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkingLot } from '../entities';
import { ParkingLotsController } from './parking-lots.controller';
import { ParkingLotsService } from './parking-lots.service';

@Module({
  imports: [TypeOrmModule.forFeature([ParkingLot])],
  controllers: [ParkingLotsController],
  providers: [ParkingLotsService],
})
export class ParkingLotsModule {}
