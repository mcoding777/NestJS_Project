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
  @Get('/:id')
  async getReference(@Param('id') id: number) {
    return await this.referenceService.getReference(id);
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
