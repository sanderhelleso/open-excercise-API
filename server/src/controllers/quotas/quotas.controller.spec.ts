import { Test, TestingModule } from '@nestjs/testing';
import { QuotasController } from './quotas.controller';

describe('Quotas Controller', () => {
  let controller: QuotasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuotasController],
    }).compile();

    controller = module.get<QuotasController>(QuotasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
