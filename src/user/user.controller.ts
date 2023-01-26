import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/:name')
  getName(@Param('name') name: string) {
    return this.userService.getName(name);
  }
}
