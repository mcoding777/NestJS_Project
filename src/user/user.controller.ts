import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { CreateUserDto, GetUserDto } from './dto/create-user.dto';
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

  // 회원가입
  @Post('/signup')
  async createUser(@Body() user: CreateUserDto) {
    this.userService.createUser(user);
  }

  // 로그인
  @Post('/signin')
  @HttpCode(200)
  async getUser(@Body() user: GetUserDto) {
    return this.userService.getUser(user);
  }
}
