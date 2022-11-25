import { ColorPaletteComponent } from './ui/color-palette/color-palette.component';
import { CommonModule } from '@angular/common';
import { MosaicCardComponent } from './ui/mosaic-card/mosaic-card.component';
import { MosaicCellComponent } from './ui/mosaic-cell/mosaic-cell.component';
import { MosaicEditorComponent } from './feature/mosaic-editor/mosaic-editor.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    ColorPaletteComponent,
    MosaicCardComponent,
    MosaicCellComponent,
    MosaicEditorComponent,
  ],
  imports: [CommonModule],
  exports: [],
  providers: [],
})
export class MosaicModule {}
