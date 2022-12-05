import { Board } from '../model/board.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BoardGeneratorService {
  generate(rows: number, columns: number): Board {
    const board: Board = {};
    for (let row = 0; row < rows; row++) {
      board[row] = [];
      for (let column = 0; column < columns; column++) {
        board[row][column] = '#ffffff';
      }
    }

    return board;
  }
}
