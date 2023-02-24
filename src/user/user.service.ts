import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryFailedError, Repository } from 'typeorm';
import { CreateUserParams, GetUserParams } from './dto/create-user.dto';
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
    const found = await this.userRepository.findOne({
      where: { user_id: user.user_id },
    });

    // Guard Clause
    if (found) {
      throw new ConflictException('이미 존재하는 아이디입니다.');
    }

    return this.userRepository.save(this.userRepository.create(user));
  }

  // 로그인
  async getUser(user: GetUserParams): Promise<User> {
    const found = await this.userRepository.findOne({
      where: { user_id: user.user_id, user_pw: user.user_pw },
    });

    if (!found) {
      throw new NotFoundException();
    }

    return found;
  }

  // 회원탈퇴
  async deleteUser(user: GetUserParams) {
    const found = await this.userRepository.findOne({
      where: { user_id: user.user_id },
    });

    if (!found) {
      throw new NotFoundException();
    } else {
      await this.userRepository
        .createQueryBuilder()
        .delete()
        .from(User)
        .where('user_id = :user_id', { user_id: user.user_id })
        .execute();
    }
  }
}
