import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
} from '@nestjs/common';
import { CreateUserDto, GetUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
// @UseFilters(GlobalExceptionFilter) // 컨트롤러단에서 예외 처리 (전역 설정 안했을 때)
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
    return this.userService.createUser(user);
  }

  // 로그인
  @Post('/signin')
  @HttpCode(200)
  async getUser(@Body() user: GetUserDto) {
    return this.userService.getUser(user);
  }

  // 회원탈퇴
  @Delete('/signin')
  async deleteUser(@Body() user: GetUserDto) {
    return this.userService.deleteUser(user);
  }
}
