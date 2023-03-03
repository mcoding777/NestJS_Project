import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PipelineDatumDto } from './dto/create-pipeline-datum.dto';
import { UpdatePipelineDatumDto } from './dto/update-pipeline-datum.dto';
import { PipelineDatum } from './entities/pipeline-datum.entity';
import { PipelineDataRepository } from './pipeline-data.repository';

@Injectable()
export class PipelineDataService {
  constructor(
    @Inject(PipelineDataRepository)
    private pipelineDataService: PipelineDataRepository,
  ) {}

  async save(pipelineDatumDto: PipelineDatumDto) {
    return 'This action adds a new pipelineDatum';
  }

  findAll() {
    return `This action returns all pipelineData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pipelineDatum`;
  }

  update(id: number, updatePipelineDatumDto: UpdatePipelineDatumDto) {
    return `This action updates a #${id} pipelineDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} pipelineDatum`;
  }
}
