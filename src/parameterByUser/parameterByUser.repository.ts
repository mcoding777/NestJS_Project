import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reference } from 'src/reference/entities/reference.entity';
import { ReferenceRepository } from 'src/reference/reference.repository';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { In, Repository } from 'typeorm';
import {
  ParameterByUserEntity,
  ParameterByUserParams,
} from './dto/create-parameterByUser.dto';
import { ParameterByUser } from './entities/parameterByUser.entity';

@Injectable()
export class ParameterByUserRepository {
  constructor(
    @InjectRepository(ParameterByUser)
    private ParameterByUserRepository: Repository<ParameterByUser>,
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

    // return await this.ParameterByUserRepository.findOneBy({
    //   user_id: userGeneratedId,
    //   description_id: referenceGeneratedId,
    // });

    return await this.ParameterByUserRepository.find({
      where: {
        user: In([user_id]),
        reference: In([value]),
      },
      relations: ['user', 'reference'],
    });
  }

  async findAll() {
    return await this.ParameterByUserRepository.find();
  }

  async findOneByReferenceValue(value: string) {
    return await this.referenceService.findOneByValue(value);
  }

  async returnByEntity(
    pipelineData: ParameterByUserParams,
  ): Promise<ParameterByUserEntity> {
    const user = await this.findOneByUserId(pipelineData.user_id);
    const reference = await this.findOneByReferenceValue(pipelineData.value);

    return {
      user,
      reference,
      options: pipelineData?.options || null,
    };
  }

  async save(entity: ParameterByUserEntity) {
    return await this.ParameterByUserRepository.save(entity);
  }

  // async update(id: number, pipelineData: ParameterByUserParams) {
  //   const entity = await this.returnByEntity(pipelineData);

  //   return await this.ParameterByUserRepository.update(id, entity);
  // }

  // async delete(user_id: User['user_id'], value: Reference['value']) {
  //   const userGeneratedId = await this.findGeneratedUserId(user_id);
  //   const referenceGeneratedId = await this.findGeneratedReferenceId(value);

  //   return await this.ParameterByUserRepository
  //     .createQueryBuilder()
  //     .delete()
  //     .from(ParameterByUser)
  //     .where({ user_id: userGeneratedId, description_id: referenceGeneratedId })
  //     .execute();
  // }
}
