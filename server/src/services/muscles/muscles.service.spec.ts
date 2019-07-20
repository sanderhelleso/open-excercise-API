import { Test, TestingModule } from '@nestjs/testing';
import { MusclesService } from './muscles.service';

describe('MusclesService', () => {
  let service: MusclesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MusclesService],
    }).compile();

    service = module.get<MusclesService>(MusclesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
