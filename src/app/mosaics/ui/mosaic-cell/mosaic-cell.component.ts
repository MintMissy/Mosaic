import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mosaic-cell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mosaic-cell.component.html',
  styleUrls: ['./mosaic-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MosaicCellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
