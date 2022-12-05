import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Position } from '../../model/position.model';

@Component({
  selector: 'app-mosaic-cell',
  templateUrl: './mosaic-cell.component.html',
  styleUrls: ['./mosaic-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MosaicCellComponent {
  @Input() cellColor: string | undefined = '#ffffff';
  @Input() position!: Position;
  @Output() cellClick = new EventEmitter<Position>();
}
