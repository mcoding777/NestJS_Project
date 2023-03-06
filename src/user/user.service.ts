import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserParams, GetUserParams } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getAllUser(): Promise<User[]> {
    return this.userRepository.find();
  }

  getUser(user_id: GetUserParams['user_id']) {
    return this.userRepository.findOneBy({ user_id });
  }

  getName(name: string) {
    return `${name}는 바보입니다.`;
  }

  // 존재하는지 체크
  async isExistUser(user_id: GetUserParams['user_id']) {
    return await this.userRepository.findOneBy({ user_id });
  }

  // 회원가입
  async createUser(user: CreateUserParams): Promise<User> {
    // Guard Clause
    if (await this.isExistUser(user.user_id)) {
      throw new ConflictException('이미 존재하는 아이디입니다.');
    }

    return this.userRepository.save(this.userRepository.create(user));
  }

  // 로그인
  async loginUser(user: GetUserParams): Promise<User> {
    const found = await this.isExistUser(user.user_id);

    if (!found) {
      throw new NotFoundException();
    }

    return found;
  }

  // 회원탈퇴
  async deleteUser(user: GetUserParams) {
    if (!(await this.isExistUser(user.user_id))) {
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
