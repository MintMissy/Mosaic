import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-mosaic-editor',
  templateUrl: './mosaic-editor.component.html',
  styleUrls: ['./mosaic-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MosaicEditorComponent {}
