import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParkingLotsModule } from './parking-lots/parking-lots.module';
import { dataSourceOptions } from 'db/data-source';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkingFloorsModule } from './parking-floors/parking-floors.module';
import { ParkingSlotsModule } from './parking-slots/parking-slots.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    ParkingLotsModule,
    ParkingFloorsModule,
    ParkingSlotsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
