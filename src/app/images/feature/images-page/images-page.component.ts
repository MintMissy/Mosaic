import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-images-page',
  templateUrl: './images-page.component.html',
  styleUrls: ['./images-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagesPageComponent {}
