import { Test, TestingModule } from '@nestjs/testing';
import { ParkingFloorsService } from './parking-floors.service';

describe('ParkingFloorsService', () => {
  let service: ParkingFloorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParkingFloorsService],
    }).compile();

    service = module.get<ParkingFloorsService>(ParkingFloorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
