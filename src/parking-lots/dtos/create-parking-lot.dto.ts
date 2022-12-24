import { DeepPartial } from 'typeorm';
import { ParkingFloorDto } from './parking-floor.dto';

export class CreateParkingLotDto {
  name: string;
  address: string;
  floors: DeepPartial<ParkingFloorDto>;
}
