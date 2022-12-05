import { ColorPaletteComponent } from './ui/color-palette/color-palette.component';
import { CommonModule } from '@angular/common';
import { MosaicBoardComponent } from './feature/mosaic-board/mosaic-board.component';
import { MosaicCardComponent } from './ui/mosaic-card/mosaic-card.component';
import { MosaicCellComponent } from './ui/mosaic-cell/mosaic-cell.component';
import { MosaicEditorComponent } from './feature/mosaic-editor/mosaic-editor.component';
import { MosaicRoutingModule } from './mosaic-routing.module';
import { NgModule } from '@angular/core';
import { ColorCellComponent } from './ui/color-cell/color-cell.component';

@NgModule({
  declarations: [ColorPaletteComponent, MosaicCardComponent, MosaicCellComponent, MosaicEditorComponent, MosaicBoardComponent, ColorCellComponent],
  imports: [CommonModule, MosaicRoutingModule],
  exports: [],
  providers: [],
})
export class MosaicModule {}
