import { Test, TestingModule } from '@nestjs/testing';
import { ParkingSlotsController } from './parking-slots.controller';

describe('ParkingSlotsController', () => {
  let controller: ParkingSlotsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParkingSlotsController],
    }).compile();

    controller = module.get<ParkingSlotsController>(ParkingSlotsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
