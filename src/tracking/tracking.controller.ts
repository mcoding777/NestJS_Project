import { Controller, Get } from '@nestjs/common';
import { TrackingService } from './tracking.service';

@Controller('tracking')
export class TrackingController {
  constructor(private trackingService: TrackingService) {}

  @Get()
  ping() {
    return 'Node.js : 제대로 요청 왔음. 응답을 받아라!';
  }
}
