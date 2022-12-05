import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Board } from '../../model/board.model';
import { BoardGeneratorService } from '../../service/board-generator.service';
import { Position } from '../../model/position.model';

@Component({
  selector: 'app-mosaic-board',
  templateUrl: './mosaic-board.component.html',
  styleUrls: ['./mosaic-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MosaicBoardComponent implements OnInit {
  @Input() selectedColor!: string;

  rows = 15;
  columns = 15;
  board!: Board;

  constructor(private boardGenerator: BoardGeneratorService) {}

  ngOnInit() {
    this.board = this.boardGenerator.generate(this.rows, this.columns);
  }

  onCellClick(position: Position) {
    this.paint(position);
  }

  paint(position: Position) {
    const row = position[0];
    const column = position[1];

    const replacedRow = [...this.board[row]];
    replacedRow[column] = this.selectedColor;
    this.board = {
      ...this.board,
      [row]: replacedRow,
    };
  }

  range(number: number) {
    return new Array(number).fill(0).map((_, index) => index);
  }
}
