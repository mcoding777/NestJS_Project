import { Controller, Get } from '@nestjs/common';
import { TargetService } from './target.service';

@Controller('target')
export class TargetController {
  constructor(private targetService: TargetService) {}

  @Get()
  getTarget() {
    return this.targetService.getTarget();
  }
}
