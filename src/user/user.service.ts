import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateUserDto,
  CreateUserParams,
  GetUserParams,
} from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getAllName(): Promise<User[]> {
    return this.userRepository.find();
  }

  getName(name: string) {
    return `${name}는 바보입니다.`;
  }

  // 회원가입
  async createUser(user: CreateUserParams): Promise<User> {
    return await this.userRepository.save(this.userRepository.create(user));
  }

  // 로그인
  async getUser(user: GetUserParams): Promise<User> {
    const found = await this.userRepository.findOne({
      where: { user_id: user.user_id, user_pw: user.user_pw },
    });

    if (!found) {
      throw new NotFoundException(`아이디나 비밀번호를 다시 확인해주세요.`);
    }

    return found;
  }
}
