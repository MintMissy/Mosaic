import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Position } from '../../model/position.model';

@Component({
  selector: 'app-mosaic-cell',
  templateUrl: './mosaic-cell.component.html',
  styleUrls: ['./mosaic-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MosaicCellComponent {
  @Input() cellColor = '#ffffff';
  @Input() position!: Position;
}
