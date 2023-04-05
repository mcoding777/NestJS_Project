import { Body, Controller, Param, Post } from '@nestjs/common';
import { SettingsService } from './settings.service';

@Controller('setting')
export class SettingsController {
  constructor(private settingService: SettingsService) {}

  @Post('/')
  async setSetting(@Body() data: Record<string, string>): Promise<string> {
    return `성공적으로 변경되었습니다. => 변경된 데이터 : ${JSON.stringify(
      data,
    )}`;
  }
}
