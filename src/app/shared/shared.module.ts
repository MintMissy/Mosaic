import { CommonModule } from '@angular/common';
import { IconComponent } from './ui/icon/icon.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [IconComponent],
  exports: [IconComponent],
  imports: [CommonModule],
})
export class SharedModule {}
