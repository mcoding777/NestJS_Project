import { Controller, Get } from '@nestjs/common';
import { StatusService } from './status.service';

@Controller('status')
export class StatusController {
  constructor(private radarStatusService: StatusService) {}

  @Get()
  getStatus() {
    return this.radarStatusService.getStatus();
  }
}
