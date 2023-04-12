import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import {
  ParameterByUserParams,
  ParameterByUserDto,
} from './dto/create-parameterByUser.dto';
import { ParameterByUserRepository } from './parameterByUser.repository';

@Injectable()
export class ParameterByUserService {
  constructor(
    @Inject(ParameterByUserRepository)
    private ParameterByUserService: ParameterByUserRepository,
  ) {}

  // // 검색
  // async getPipelineDatasByUserId(user_id: string) {
  //   return await this.ParameterByUserService.findAllByUserId(user_id);
  // }

  // 추가
  async createPipelineData(pipelineData: ParameterByUserParams) {
    const entity = await this.ParameterByUserService.returnByEntity(
      pipelineData,
    );
    return await this.ParameterByUserService.save(entity);
  }

  // // 수정
  // async updatePipelineData(pipelineData: ParameterByUserParams) {
  //   const found = await this.ParameterByUserService.findOneBy(
  //     pipelineData.user_id,
  //     pipelineData.value,
  //   );

  //   if (!found) {
  //     throw new NotFoundException('없는 데이터입니다.');
  //   }

  //   return await this.ParameterByUserService.update(found.id, pipelineData);
  // }

  // // 삭제
  // async deletePipelineData(pipelineData: ParameterByUserParams) {
  //   const found = await this.ParameterByUserService.findOneBy(
  //     pipelineData.user_id,
  //     pipelineData.value,
  //   );

  //   if (!found) {
  //     throw new NotFoundException('없는 데이터입니다.');
  //   }

  //   return await this.ParameterByUserService.delete(
  //     pipelineData.user_id,
  //     pipelineData.value,
  //   );
  // }
}
