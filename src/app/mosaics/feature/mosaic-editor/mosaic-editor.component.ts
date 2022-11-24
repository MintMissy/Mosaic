import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mosaic-editor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mosaic-editor.component.html',
  styleUrls: ['./mosaic-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MosaicEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
