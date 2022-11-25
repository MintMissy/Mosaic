import { CommonModule } from '@angular/common';
import { ImageCardComponent } from './ui/image-card/image-card.component';
import { ImagesListComponent } from './ui/images-list/images-list.component';
import { ImagesPageComponent } from './feature/images-page/images-page.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ImageCardComponent, ImagesListComponent, ImagesPageComponent],
  imports: [CommonModule],
  exports: [],
  providers: [],
})
export class ImagesModule {}
