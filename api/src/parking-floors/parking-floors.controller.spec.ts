import { Test, TestingModule } from '@nestjs/testing';
import { ParkingFloorsController } from './parking-floors.controller';

describe('ParkingFloorsController', () => {
  let controller: ParkingFloorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParkingFloorsController],
    }).compile();

    controller = module.get<ParkingFloorsController>(ParkingFloorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
