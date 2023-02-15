import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

// controller : Endpoint와 Method에 따라 콜백 함수 실행
@Controller('boards') // 엔드포인트
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  @Get() // get method이면 아래 함수를 실행해라
  getAllBoards() {
    return this.boardService.getAllBoards();
  }
}
