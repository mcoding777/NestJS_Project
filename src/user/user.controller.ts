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

  @Get('/:user_id')
  async getUser(@Param('user_id') user_id: string) {
    return await this.userService.getUser(user_id);
  }

  @Get('/')
  async getAllUser() {
    return await this.userService.getAllUser();
  }

  // 회원가입
  @Post('/signup')
  async createUser(@Body() user: CreateUserDto) {
    return await this.userService.createUser(user);
  }

  // 로그인
  @Post('/signin')
  @HttpCode(200)
  async loginUser(@Body() user: GetUserDto) {
    return await this.userService.loginUser(user);
  }

  // 회원탈퇴
  @Delete('/signin')
  async deleteUser(@Body() user: GetUserDto) {
    return await this.userService.deleteUser(user);
  }
}
