import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-page',
  templateUrl: './images-page.component.html',
  styleUrls: ['./images-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagesPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}