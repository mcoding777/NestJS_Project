import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  UseFilters,
} from '@nestjs/common';
import {
  CreateUserDto,
  GetUserDto,
  GlobalExceptionFilter,
} from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
@UseFilters(GlobalExceptionFilter) // 컨트롤러단에서 예외 처리
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
