import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, CreateUserParams } from './dto/create-user.dto';
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

  async createUser(user: CreateUserParams) {
    return await this.userRepository.save(this.userRepository.create(user));
  }
}
