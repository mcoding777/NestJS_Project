import { Module } from '@nestjs/common';
import { PipelineDataService } from './pipeline-data.service';
import { PipelineDataController } from './pipeline-data.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PipelineDatum } from './entities/pipeline-datum.entity';
import { PipelineDataRepository } from './pipeline-data.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PipelineDatum])],
  controllers: [PipelineDataController],
  providers: [PipelineDataService, PipelineDataRepository],
})
export class PipelineDataModule {}
