import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagesListComponent {}
