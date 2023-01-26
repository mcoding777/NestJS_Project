import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private name: string;

  getName(name: string) {
    return `${name}는 바보입니다.`;
  }
}
