import { Module } from '@nestjs/common';
import { CommandsService } from './commands.service';
import { CommandsController } from './commands.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Command } from './entities/command.entity';
import { CommandsRepository } from './commands.repository';

@Module({
  controllers: [CommandsController],
  providers: [CommandsService, CommandsRepository],
  imports: [TypeOrmModule.forFeature([Command])],
})
export class CommandsModule {}
