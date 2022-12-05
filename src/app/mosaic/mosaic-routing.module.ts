import { CommonModule } from '@angular/common';
import { MosaicEditorComponent } from './feature/mosaic-editor/mosaic-editor.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: MosaicEditorComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class MosaicRoutingModule {}
