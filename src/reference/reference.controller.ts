import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateReferenceDto } from './dto/create-reference';
import { ReferenceService } from './reference.service';

@Controller('reference')
export class ReferenceController {
  constructor(private readonly referenceService: ReferenceService) {}

  // 전체 검색
  @Get('/')
  async getAllReference() {
    const result = await this.referenceService.getAllReference();
    return Object.assign({
      data: result,
      status: 200,
      message: '데이터 조회에 성공했습니다.',
    });
  }

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
  @Patch('/:value')
  async updateReference(
    @Param('value') value: string,
    @Body() body: CreateReferenceDto,
  ) {
    const result = await this.referenceService.updateReference(value, body);

    return Object.assign({
      data: result,
      status: 200,
      message: '데이터 수정에 성공했습니다.',
    });
  }

  // 삭제
  @Delete('/:value')
  async deleteReference(@Param('value') value: string) {
    const result = await this.referenceService.deleteReference(value);

    return Object.assign({
      data: result,
      status: 200,
      message: '데이터 삭제에 성공했습니다.',
    });
  }
}
