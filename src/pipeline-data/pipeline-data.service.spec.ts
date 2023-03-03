import { Test, TestingModule } from '@nestjs/testing';
import { PipelineDataService } from './pipeline-data.service';

describe('PipelineDataService', () => {
  let service: PipelineDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PipelineDataService],
    }).compile();

    service = module.get<PipelineDataService>(PipelineDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
