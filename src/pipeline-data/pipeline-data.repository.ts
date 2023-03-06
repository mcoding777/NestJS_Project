import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reference } from 'src/reference/entities/reference.entity';
import { ReferenceRepository } from 'src/reference/reference.repository';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { In, Repository } from 'typeorm';
import {
  PipelineDataEntity,
  PipelineDataParams,
} from './dto/create-pipeline-datum.dto';
import { PipelineDatum } from './entities/pipeline-datum.entity';

@Injectable()
export class PipelineDataRepository {
  constructor(
    @InjectRepository(PipelineDatum)
    private pipelineDataRepository: Repository<PipelineDatum>,
    @Inject(UserService)
    private userRepository: UserService,
    @Inject(ReferenceRepository)
    private referenceService: ReferenceRepository,
  ) {}

  async findOneByUserId(user_id: string) {
    return await this.userRepository.getUser(user_id);
  }

  async findAllBy(user_id: string, value?: string) {
    // const userGeneratedId = await this.findGeneratedUserId(user_id);
    // const referenceGeneratedId = await this.findGeneratedReferenceId(value);

    // return await this.pipelineDataRepository.findOneBy({
    //   user_id: userGeneratedId,
    //   description_id: referenceGeneratedId,
    // });

    return await this.pipelineDataRepository.find({
      where: {
        user: In([user_id]),
        reference: In([value]),
      },
      relations: ['user', 'reference'],
    });
  }

  async findAll() {
    return await this.pipelineDataRepository.find();
  }

  async findOneByReferenceValue(value: string) {
    return await this.referenceService.findOneByValue(value);
  }

  async returnByEntity(
    pipelineData: PipelineDataParams,
  ): Promise<PipelineDataEntity> {
    const user = await this.findOneByUserId(pipelineData.user_id);
    const reference = await this.findOneByReferenceValue(pipelineData.value);

    return {
      user,
      reference,
      options: pipelineData?.options || null,
    };
  }

  async save(entity: PipelineDataEntity) {
    return await this.pipelineDataRepository.save(entity);
  }

  // async update(id: number, pipelineData: PipelineDataParams) {
  //   const entity = await this.returnByEntity(pipelineData);

  //   return await this.pipelineDataRepository.update(id, entity);
  // }

  // async delete(user_id: User['user_id'], value: Reference['value']) {
  //   const userGeneratedId = await this.findGeneratedUserId(user_id);
  //   const referenceGeneratedId = await this.findGeneratedReferenceId(value);

  //   return await this.pipelineDataRepository
  //     .createQueryBuilder()
  //     .delete()
  //     .from(PipelineDatum)
  //     .where({ user_id: userGeneratedId, description_id: referenceGeneratedId })
  //     .execute();
  // }
}
