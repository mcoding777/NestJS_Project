import {
  Body,
  Controller,
  Get,
  HttpCode,
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
    const result = await this.referenceService.getReference(value);
    return Object.assign({
      data: result,
      status: 200,
      message: '데이터 조회에 성공했습니다.',
    });
  }

  // 추가
  @Post('/')
  async createReference(@Body() body: CreateReferenceDto) {
    const result = await this.referenceService.createReference(body);
    return Object.assign({
      data: result,
      status: 201,
      message: '데이터 추가에 성공했습니다.',
    });
  }

  // 수정
  @Patch('/')
  async updateReference(@Body() body: CreateReferenceDto) {
    const result = this.referenceService.updateReference(body);

    return Object.assign({
      data: result,
      status: 200,
      message: '데이터 추가에 성공했습니다.',
    });
  }

  // 삭제
}
