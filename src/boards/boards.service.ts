import { Injectable } from '@nestjs/common';

// service : 해당 Endpoint와 관련된 함수 정리
@Injectable() // @Injectable : 해당 service를 어느 컨트롤러에서든 사용할 수 있게 해주는 데코레이터
export class BoardsService {
  private boards = [];

  addBoard(board: string) {
    this.boards.push(board);
    return this.boards;
  }

  getAllBoards() {
    return this.boards;
  }
}
