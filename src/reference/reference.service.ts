import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryFailedError, Repository } from 'typeorm';
import { ReferenceParams } from './dto/create-reference';
import { Reference } from './entities/reference.entity';

@Injectable()
export class ReferenceService {
  constructor(
    @InjectRepository(Reference)
    private referenceRepository: Repository<Reference>,
  ) {}

  // value가 존재하는지 체크
  async isExistReference(value: ReferenceParams['value']) {
    return await this.referenceRepository.findOne({
      where: {
        value,
      },
    });
  }

  // 검색
  async getReference(value: string) {
    const found = await this.isExistReference(value);

    if (!found) {
      throw new NotFoundException();
    }

    return found;
  }

  // 추가
  async createReference(reference: ReferenceParams) {
    const found = await this.isExistReference(reference.value);

    if (found) {
      throw new ConflictException('이미 존재하는 Argument 입니다.');
    }

    return await this.referenceRepository.save(
      this.referenceRepository.create(reference),
    );
  }

  // 수정
  async updateReference(
    value: ReferenceParams['value'],
    reference: ReferenceParams,
  ) {
    const found = await this.isExistReference(value);

    if (!found) {
      throw new NotFoundException();
    }

    const updateFound = await this.isExistReference(reference.value);

    // 바꿀 데이터의 value는 존재하지 않는지? (중복 값 체크)
    if (updateFound && value !== reference.value) {
      throw new QueryFailedError('', [], '중복 값입니다.');
    }

    return this.referenceRepository.update(found.id, reference);
  }

  // 삭제
  async deleteReference(value: ReferenceParams['value']) {
    try {
      return this.referenceRepository
        .createQueryBuilder()
        .delete()
        .from(Reference)
        .where({ value })
        .execute();
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
