import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateUserParams,
  GetUserParams,
  UpdateUserParams,
} from './dto/create-user.dto';
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

  // 존재하는지 체크
  async isExistUser(user_id: string) {
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
  async loginUser(user: GetUserParams, user_id: string): Promise<User> {
    const found = await this.isExistUser(user_id);

    if (!found || found.user_pw !== user.user_pw) {
      throw new NotFoundException();
    }

    return found;
  }

  // 회원정보 수정
  async updateUser(user: UpdateUserParams, user_id: string) {
    const found = await this.isExistUser(user_id);

    if (!found) {
      throw new NotFoundException();
    }

    return await this.userRepository.update(found.id, {
      ...found,
      ...user,
    });
  }

  // 회원탈퇴
  async deleteUser(user_id: string) {
    const found = await this.isExistUser(user_id);

    if (found) {
      return await this.userRepository
        .createQueryBuilder()
        .delete()
        .from(User)
        .where({ user_id })
        .execute();
    }
    throw new NotFoundException();
  }
}
