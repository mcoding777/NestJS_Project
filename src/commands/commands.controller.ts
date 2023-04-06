import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CommandsService } from './commands.service';
import { CreateCommandDto } from './dto/create-command.dto';

@Controller('commands')
export class CommandsController {
  constructor(private readonly commandsService: CommandsService) {}

  @Get()
  findAll() {
    return this.commandsService.findAll();
  }

  @Get(':command')
  findOne(@Param('command') command: string) {
    return this.commandsService.findByCommand(command);
  }

  @Post()
  async create(@Body() createCommandDto: CreateCommandDto) {
    return await this.commandsService.create(createCommandDto);
  }

  @Patch(':command')
  update(
    @Param('command') command: string,
    @Body() updateCommandDto: CreateCommandDto,
  ) {
    return this.commandsService.update(command, updateCommandDto);
  }

  @Delete(':command')
  remove(@Param('command') command: string) {
    return this.commandsService.remove(command);
  }
}
