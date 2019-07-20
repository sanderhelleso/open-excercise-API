import { Test, TestingModule } from '@nestjs/testing';
import { MusclesController } from './muscles.controller';

describe('Muscles Controller', () => {
  let controller: MusclesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MusclesController],
    }).compile();

    controller = module.get<MusclesController>(MusclesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
