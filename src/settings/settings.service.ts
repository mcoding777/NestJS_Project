import { Injectable } from '@nestjs/common';

@Injectable()
export class SettingsService {
  private setting = {
    one: 'one입니다',
    two: 'two입니다',
  };

  setSetting(property: 'one' | 'two', text: string) {
    this.setting[property] = text;
  }

  getSetting(property: 'one' | 'two') {
    return this.setting[property];
  }
}
