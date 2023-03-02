import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { QueryFailedError } from 'typeorm';
import { ReferenceParams } from './dto/create-reference';
import { ReferenceRepository } from './reference.repository';

@Injectable()
export class ReferenceService {
  constructor(
    @Inject(ReferenceRepository)
    private referenceService: ReferenceRepository,
  ) {}

  // 검색
  async getReference(value: string) {
    const found = await this.referenceService.findOneByValue(value);

    if (!found) {
      throw new NotFoundException();
    }

    return found;
  }

  // 추가
  async createReference(reference: ReferenceParams) {
    const found = await this.referenceService.findOneByValue(reference.value);

    if (found) {
      throw new ConflictException('이미 존재하는 Argument 입니다.');
    }

    return await this.referenceService.save(reference);
  }

  // 수정
  async updateReference(
    value: ReferenceParams['value'],
    reference: ReferenceParams,
  ) {
    const found = await this.referenceService.findOneByValue(value);

    if (!found) {
      throw new NotFoundException();
    }

    const updateFound = await this.referenceService.findOneByValue(
      reference.value,
    );

    // 바꿀 데이터의 value는 존재하지 않는지? (중복 값 체크)
    if (updateFound && value !== reference.value) {
      throw new QueryFailedError('', [], '중복 값입니다.');
    }

    return this.referenceService.update(found.id, reference);
  }

  // 삭제
  async deleteReference(value: ReferenceParams['value']) {
    return this.referenceService.deleteByValue(value);
  }
}
