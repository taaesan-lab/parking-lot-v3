import { Controller, Get, Param, Query } from '@nestjs/common';
import { ParkingSlotsService } from './parking-slots.service';

@Controller('parking-slots')
export class ParkingSlotsController {
  constructor(private parkingSlotsService: ParkingSlotsService) {}

  @Get('/slots')
  async findSlots(@Query('avaliable') avaliable: string) {
    console.log(avaliable);
    const slots = await this.parkingSlotsService.find(avaliable === 'true');
    return slots;
  }
}
