import { Body, Controller, Post } from '@nestjs/common';
import { ParkingFloorsService } from 'src/parking-floors/parking-floors.service';
import { ParkingSlotsService } from 'src/parking-slots/parking-slots.service';
import { VehicleTypeService } from 'src/vehicle-type/vehicle-type.service';
import { CreateParkingLotDto } from './dtos/create-parking-lot.dto';
import { ParkingLotsService } from './parking-lots.service';

@Controller('parking-lots')
export class ParkingLotsController {
  constructor(
    private parkingLotService: ParkingLotsService,
    private parkingFloorService: ParkingFloorsService,
    private parkingSlotsService: ParkingSlotsService,
    private vehicleType: VehicleTypeService,
  ) {}

  @Post('/create')
  async create(@Body() body: CreateParkingLotDto) {
    console.log(JSON.stringify(body));
    const parkingLot = await this.parkingLotService.create(body);
    for (let floor of body.floors) {
      const parkingFloor = await this.parkingFloorService.create(floor);
      for (let slot of floor.slots) {
        let vehicleType = await this.vehicleType.findOne(
          slot.type.toLowerCase(),
        );
        await this.parkingSlotsService.create(slot, parkingFloor, vehicleType);
      }
    }
  }
}
