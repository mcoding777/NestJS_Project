import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommandParams } from './dto/create-command.dto';
import { Command } from './entities/command.entity';

@Injectable()
export class CommandsRepository {
  constructor(
    @InjectRepository(Command)
    private commandsRepository: Repository<Command>,
  ) {}

  async save(createCommand: CreateCommandParams) {
    return await this.commandsRepository.save(createCommand);
  }

  async findAll() {
    return await this.commandsRepository.find();
  }

  async findByCommand(command: string) {
    return await this.commandsRepository.findOneBy({ command });
  }

  async update(id: number, updateCommand: CreateCommandParams) {
    return await this.commandsRepository.update(id, updateCommand);
  }

  async remove(id: number) {
    return await this.commandsRepository.delete(id);
  }
}
