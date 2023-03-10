import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParkingLotsModule } from './parking-lots/parking-lots.module';
import { dataSourceOptions } from './data-source';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkingFloorsModule } from './parking-floors/parking-floors.module';
import { ParkingSlotsModule } from './parking-slots/parking-slots.module';
import { VehicleTypeModule } from './vehicle-type/vehicle-type.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    ParkingLotsModule,
    ParkingFloorsModule,
    ParkingSlotsModule,
    VehicleTypeModule,
    VehicleModule,
    TicketModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
