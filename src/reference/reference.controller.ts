import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateReferenceDto } from './dto/create-reference';
import { ReferenceService } from './reference.service';

@Controller('reference')
export class ReferenceController {
  constructor(private readonly referenceService: ReferenceService) {}

  // 검색
  @Get('/:value')
  async getReference(@Param('value') value: string) {
    return await this.referenceService.getReference(value);
  }

  // 추가
  @Post('/')
  async createReference(@Body() body: CreateReferenceDto) {
    return await this.referenceService.createReference(body);
  }

  // 수정
  @Patch('/')
  updateReference(@Body() body: CreateReferenceDto) {
    return this.referenceService.updateReference(body);
  }

  // 삭제
}
