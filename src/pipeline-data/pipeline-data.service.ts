import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import {
  PipelineDataParams,
  PipelineDatumDto,
} from './dto/create-pipeline-datum.dto';
import { PipelineDataRepository } from './pipeline-data.repository';

@Injectable()
export class PipelineDataService {
  constructor(
    @Inject(PipelineDataRepository)
    private pipelineDataService: PipelineDataRepository,
  ) {}

  // 검색
  async getPipelineDatasByUserId(user_id: string) {
    return await this.pipelineDataService.findAllByUserId(user_id);
  }

  // 추가
  async createPipelineData(pipelineData: PipelineDataParams) {
    const entity = await this.pipelineDataService.returnByEntity(pipelineData);

    return await this.pipelineDataService.save(entity);
  }

  // 수정
  async updatePipelineData(pipelineData: PipelineDataParams) {
    const found = await this.pipelineDataService.findOneBy(
      pipelineData.user_id,
      pipelineData.value,
    );

    if (!found) {
      throw new NotFoundException('없는 데이터입니다.');
    }

    return await this.pipelineDataService.update(found.id, pipelineData);
  }

  // 삭제
  async deletePipelineData(pipelineData: PipelineDataParams) {
    const found = await this.pipelineDataService.findOneBy(
      pipelineData.user_id,
      pipelineData.value,
    );

    if (!found) {
      throw new NotFoundException('없는 데이터입니다.');
    }

    return await this.pipelineDataService.delete(
      pipelineData.user_id,
      pipelineData.value,
    );
  }
}
