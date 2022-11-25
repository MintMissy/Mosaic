import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImagesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
