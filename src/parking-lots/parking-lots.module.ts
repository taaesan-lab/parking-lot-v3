import { Module } from '@nestjs/common';
import { ParkingLotsController } from './parking-lots.controller';
import { ParkingLotsService } from './parking-lots.service';

@Module({
  controllers: [ParkingLotsController],
  providers: [ParkingLotsService]
})
export class ParkingLotsModule {}
