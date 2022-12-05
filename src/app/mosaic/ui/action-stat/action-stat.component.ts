import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-action-stat',
  templateUrl: './action-stat.component.html',
  styleUrls: ['./action-stat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionStatComponent {
  @Input() statValue!: number;
  @Input() title!: string;
}
