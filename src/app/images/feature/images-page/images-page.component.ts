import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-images-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './images-page.component.html',
  styleUrls: ['./images-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImagesPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
