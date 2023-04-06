import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { CommandsRepository } from './commands.repository';
import { CreateCommandParams } from './dto/create-command.dto';

@Injectable()
export class CommandsService {
  constructor(
    @Inject(CommandsRepository)
    private commandsRepository: CommandsRepository,
  ) {}

  async findAll() {
    return await this.commandsRepository.findAll();
  }

  async findByCommand(command: string) {
    return await this.commandsRepository.findByCommand(command);
  }

  async create(createCommand: CreateCommandParams) {
    const found = await this.commandsRepository.findByCommand(
      createCommand.command,
    );

    if (found) {
      throw new ConflictException('이미 존재하는 Command 입니다.');
    }

    return await this.commandsRepository.save(createCommand);
  }

  async update(command: string, updateCommand: CreateCommandParams) {
    const found = await this.commandsRepository.findByCommand(command);
    const updateFound =
      found.command !== updateCommand.command &&
      (await this.commandsRepository.findByCommand(updateCommand.command));

    if (!found) {
      throw new ConflictException('존재하지 않는 Command 입니다.');
    }

    if (updateFound) {
      throw new ConflictException('수정할 수 없는 Command 입니다.');
    }

    return await this.commandsRepository.update(found.id, updateCommand);
  }

  async remove(command: string) {
    const found = await this.commandsRepository.findByCommand(command);

    if (!found) {
      throw new ConflictException('존재하지 않는 Command 입니다.');
    }

    return await this.commandsRepository.remove(found.id);
  }
}
