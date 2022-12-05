import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-action-stats',
  templateUrl: './action-stats.component.html',
  styleUrls: ['./action-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionStatsComponent {}
