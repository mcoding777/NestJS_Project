import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/:name')
  getName(@Param('name') name: string) {
    return this.userService.getName(name);
  }

  @Get('/')
  async getAllNames() {
    return await this.userService.getAllName();
  }

  @Post('/signup')
  async createUser(@Body() user: CreateUserDto) {
    this.userService.createUser(user);
  }
}
