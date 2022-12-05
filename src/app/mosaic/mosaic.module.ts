import { ActionStatComponent } from './ui/action-stat/action-stat.component';
import { ActionStatsComponent } from './ui/action-stats/action-stats.component';
import { BrushesSelectorComponent } from './ui/brushes-selector/brushes-selector.component';
import { ColorCellComponent } from './ui/color-cell/color-cell.component';
import { ColorPaletteComponent } from './ui/color-palette/color-palette.component';
import { CommonModule } from '@angular/common';
import { MosaicBoardComponent } from './feature/mosaic-board/mosaic-board.component';
import { MosaicCardComponent } from './ui/mosaic-card/mosaic-card.component';
import { MosaicCellComponent } from './ui/mosaic-cell/mosaic-cell.component';
import { MosaicEditorComponent } from './feature/mosaic-editor/mosaic-editor.component';
import { MosaicRoutingModule } from './mosaic-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BrushItemComponent } from './ui/brush-item/brush-item.component';

@NgModule({
  declarations: [
    ColorPaletteComponent,
    MosaicCardComponent,
    MosaicCellComponent,
    MosaicEditorComponent,
    MosaicBoardComponent,
    ColorCellComponent,
    ActionStatsComponent,
    ActionStatComponent,
    BrushesSelectorComponent,
    BrushItemComponent,
  ],
  imports: [CommonModule, MosaicRoutingModule, SharedModule],
  exports: [],
  providers: [],
})
export class MosaicModule {}
