import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mosaic-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mosaic-card.component.html',
  styleUrls: ['./mosaic-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MosaicCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
