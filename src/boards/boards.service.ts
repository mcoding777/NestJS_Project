import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  constructor(private boards: string[]) {
    this.boards = boards;
  }

  addBoard(board: string) {
    this.boards.push(board);
    return this.boards;
  }

  getAllBoards() {
    return this.boards;
  }
}
