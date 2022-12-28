import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkingSlotsController } from './parking-slots.controller';
import { ParkingSlot } from './parking-slots.entity';
import { ParkingSlotsService } from './parking-slots.service';

@Module({
  imports: [TypeOrmModule.forFeature([ParkingSlot])],
  controllers: [ParkingSlotsController],
  providers: [ParkingSlotsService],
})
export class ParkingSlotsModule {}
