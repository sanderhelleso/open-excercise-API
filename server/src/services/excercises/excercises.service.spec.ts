import { Test, TestingModule } from '@nestjs/testing';
import { ExcercisesService } from './excercises.service';

describe('ExcercisesService', () => {
  let service: ExcercisesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExcercisesService],
    }).compile();

    service = module.get<ExcercisesService>(ExcercisesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
