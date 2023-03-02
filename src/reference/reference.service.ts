import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReferenceParams } from './dto/create-reference';
import { Reference } from './entities/reference.entity';

@Injectable()
export class ReferenceService {
  constructor(
    @InjectRepository(Reference)
    private referenceRepository: Repository<Reference>,
  ) {}

  // 존재하는지 체크
  async isExistReference(reference: CreateReferenceParams) {
    return await this.referenceRepository.findOne({
      where: { value: reference.value },
    });
  }

  // 검색
  async getReference(id: number) {
    return await this.referenceRepository.findOne({
      where: { id },
    });
  }

  // 추가
  async createReference(reference: CreateReferenceParams) {
    const found = await this.isExistReference(reference);

    if (found) {
      throw new ConflictException('이미 존재하는 Argument 입니다.');
    }

    return await this.referenceRepository.save(
      this.referenceRepository.create(reference),
    );
  }

  // 수정
  async updateReference(reference: CreateReferenceParams) {
    const found = await this.isExistReference(reference);

    if (!found) {
      throw new NotFoundException('찾을 수 없는 Argument 입니다.');
    }
    return this.referenceRepository.update(found.id, reference);
  }

  // 삭제
  async deleteReference(reference: CreateReferenceParams) {
    try {
      return this.referenceRepository
        .createQueryBuilder()
        .delete()
        .from(Reference)
        .where({ value: reference.value })
        .execute();
    } catch (error) {
      throw new NotFoundException('찾을 수 없는 Argument 입니다.');
    }
  }
}
