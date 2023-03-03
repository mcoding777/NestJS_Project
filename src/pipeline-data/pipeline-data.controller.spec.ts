import { Test, TestingModule } from '@nestjs/testing';
import { PipelineDataController } from './pipeline-data.controller';
import { PipelineDataService } from './pipeline-data.service';

describe('PipelineDataController', () => {
  let controller: PipelineDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PipelineDataController],
      providers: [PipelineDataService],
    }).compile();

    controller = module.get<PipelineDataController>(PipelineDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
