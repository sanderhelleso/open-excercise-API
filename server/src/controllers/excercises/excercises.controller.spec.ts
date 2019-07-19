import { Test, TestingModule } from '@nestjs/testing';
import { ExcercisesController } from './excercises.controller';

describe('Excercises Controller', () => {
  let controller: ExcercisesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExcercisesController],
    }).compile();

    controller = module.get<ExcercisesController>(ExcercisesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
