import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorPaletteComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}