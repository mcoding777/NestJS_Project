import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

// module : controller와 provider 등록
@Module({
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
