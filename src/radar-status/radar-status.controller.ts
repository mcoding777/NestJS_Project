import { Controller, Get } from '@nestjs/common';
import { RadarStatusService } from './radar-status.service';

@Controller('radar_info')
export class RadarStatusController {
  constructor(private radarStatusService: RadarStatusService) {}

  @Get()
  getTarget() {
    return this.radarStatusService.getStatus();
  }
}
