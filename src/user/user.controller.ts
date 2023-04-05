import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  CreateUserDto,
  GetUserDto,
  UpdateUserDto,
} from './dto/create-user.dto';
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
  @Post('/')
  async createUser(@Body() user: CreateUserDto) {
    return await this.userService.createUser(user);
  }

  // 로그인
  @Post('/:user_id')
  @HttpCode(200)
  async loginUser(@Body() user: GetUserDto, @Param('user_id') user_id: string) {
    return await this.userService.loginUser(user, user_id);
  }

  // 회원정보 수정
  @Patch('/:user_id')
  @HttpCode(200)
  async updateUser(
    @Body() user: UpdateUserDto,
    @Param('user_id') user_id: string,
  ) {
    const result = await this.userService.updateUser(user, user_id);

    console.log('result => ', result);

    return Object.assign({
      data: result,
      status: 200,
      message: '데이터 수정에 성공했습니다.',
    });
  }

  // 회원탈퇴
  @Delete('/:user_id')
  async deleteUser(@Param('user_id') user_id: string) {
    return await this.userService.deleteUser(user_id);
  }
}
