import { Test, TestingModule } from '@nestjs/testing';
import { QuotasService } from './quotas.service';

describe('QuotasService', () => {
  let service: QuotasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuotasService],
    }).compile();

    service = module.get<QuotasService>(QuotasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
