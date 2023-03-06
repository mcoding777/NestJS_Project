import { Module } from '@nestjs/common';
import { PipelineDataService } from './pipeline-data.service';
import { PipelineDataController } from './pipeline-data.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PipelineDatum } from './entities/pipeline-datum.entity';
import { PipelineDataRepository } from './pipeline-data.repository';
import { ReferenceRepository } from 'src/reference/reference.repository';
import { UserService } from 'src/user/user.service';
import { Reference } from 'src/reference/entities/reference.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PipelineDatum, Reference, User])],
  controllers: [PipelineDataController],
  providers: [
    PipelineDataService,
    PipelineDataRepository,
    UserService,
    ReferenceRepository,
  ],
})
export class PipelineDataModule {}
