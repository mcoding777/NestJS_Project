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

  // 존재하는지 체크
  async isExistUser(user: GetUserParams) {
    return await this.userRepository.findOne({
      where: { user_id: user.user_id },
    });
  }

  // 회원가입
  async createUser(user: CreateUserParams): Promise<User> {
    // Guard Clause
    if (this.isExistUser(user)) {
      throw new ConflictException('이미 존재하는 아이디입니다.');
    }

    return this.userRepository.save(this.userRepository.create(user));
  }

  // 로그인
  async getUser(user: GetUserParams): Promise<User> {
    const found = this.isExistUser(user);

    if (!found) {
      throw new NotFoundException();
    }

    return found;
  }

  // 회원탈퇴
  async deleteUser(user: GetUserParams) {
    if (!this.isExistUser(user)) {
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
