import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-brush-item',
  templateUrl: './brush-item.component.html',
  styleUrls: ['./brush-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrushItemComponent {
  @Input() icon!: string;
  @Input() active!: boolean;
}
