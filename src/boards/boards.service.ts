import { Injectable } from '@nestjs/common';

@Injectable()
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
