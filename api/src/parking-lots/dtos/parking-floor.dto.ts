import { DeepPartial } from 'typeorm';
import { ParkingSlotDto } from './parking-slot.dto';

export class ParkingFloorDto {
  name: string;
  slots: ParkingSlotDto[];
}
