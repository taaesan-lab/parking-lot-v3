import { Body, Controller, Post } from '@nestjs/common';
import { CreateParkingLotDto } from './dtos/create-parking-lot.dto';

@Controller('parking-lots')
export class ParkingLotsController {
  @Post('/create')
  create(@Body() body: CreateParkingLotDto) {
    console.log(JSON.stringify(body));
  }
}
