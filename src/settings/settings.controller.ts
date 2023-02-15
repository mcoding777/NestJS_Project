import { Body, Controller, Param, Post } from '@nestjs/common';
import { SettingsService } from './settings.service';

@Controller('settings')
export class SettingsController {
  constructor(private settingService: SettingsService) {}

  @Post('/:property')
  async setSetting(
    @Body() data: { text: string },
    @Param('property') property: 'one' | 'two',
  ): Promise<string> {
    this.settingService.setSetting[property] = data.text;
    return '성공적으로 변경되었습니다.';
  }
}
