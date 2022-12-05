import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-color-cell',
  templateUrl: './color-cell.component.html',
  styleUrls: ['./color-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorCellComponent {
  @Input() color!: string;
  @Output() selectColor = new EventEmitter<string>();
}
