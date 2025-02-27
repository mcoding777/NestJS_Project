import { Module } from '@nestjs/common';
import { RadarStatusController } from './radar-status.controller';
import { RadarStatusService } from './radar-status.service';

@Module({
  controllers: [RadarStatusController],
  providers: [RadarStatusService],
})
export class RadarStatusModule {}
