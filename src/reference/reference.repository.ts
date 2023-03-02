import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReferenceParams } from './dto/create-reference';
import { Reference } from './entities/reference.entity';

@Injectable()
export class ReferenceRepository {
  constructor(
    @InjectRepository(Reference)
    private referenceRepository: Repository<Reference>,
  ) {}

  async findOneByValue(value: ReferenceParams['value']) {
    return await this.referenceRepository.findOneBy({ value });
  }

  async save(reference: ReferenceParams) {
    return await this.referenceRepository.save(reference);
  }

  async update(id: number, reference: ReferenceParams) {
    return await this.referenceRepository.update(id, reference);
  }

  async deleteByValue(value: ReferenceParams['value']) {
    return await this.referenceRepository
      .createQueryBuilder()
      .delete()
      .from(Reference)
      .where({ value })
      .execute();
  }
}
