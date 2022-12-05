import { Component } from '@angular/core';

@Component({
  selector: 'app-mosaic-board',
  templateUrl: './mosaic-board.component.html',
  styleUrls: ['./mosaic-board.component.scss'],
})
export class MosaicBoardComponent {
  rows = 15;
  columns = 15;

  range(number: number) {
    return new Array(number).fill(0);
  }
}
