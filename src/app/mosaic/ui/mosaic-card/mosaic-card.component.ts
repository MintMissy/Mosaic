import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-mosaic-card',
  templateUrl: './mosaic-card.component.html',
  styleUrls: ['./mosaic-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MosaicCardComponent {}
