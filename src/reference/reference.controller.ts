import { Controller, Get, Param, Query } from '@nestjs/common';
import { CreateReferenceDto } from './dto/create-reference';
import { ReferenceService } from './reference.service';

@Controller('reference')
export class ReferenceController {
  constructor(private readonly referenceService: ReferenceService) {}

  // 추가
  @Get('/')
  createReference(@Query() params: CreateReferenceDto) {
    return this.referenceService.createReference({
      value: params.value,
      label: params.label,
      description: params.description,
    });
  }

  // 수정

  // 삭제
}
