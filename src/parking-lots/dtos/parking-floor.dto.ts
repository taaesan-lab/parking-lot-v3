import { ParkingSlotDto } from './parking-slotdto';

export class ParkingFloorDto {
  name: string;
  slots: Array<ParkingSlotDto>;
}
