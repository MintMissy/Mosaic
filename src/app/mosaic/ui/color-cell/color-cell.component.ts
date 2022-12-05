import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
  selector: 'app-color-cell',
  templateUrl: './color-cell.component.html',
  styleUrls: ['./color-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorCellComponent {
  @HostBinding('style.--tw-ring-color')
  @Input()
  color!: string;
  @Input() selectedColor!: boolean;
  @Output() selectColor = new EventEmitter<string>();
}
