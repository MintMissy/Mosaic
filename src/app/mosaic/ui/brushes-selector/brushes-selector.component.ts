import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-brushes-selector',
  templateUrl: './brushes-selector.component.html',
  styleUrls: ['./brushes-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrushesSelectorComponent {}
