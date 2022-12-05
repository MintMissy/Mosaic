import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `<i [ngClass]="['bi', iconCode]" [ngStyle]="{ fontSize: size + 'px' }"></i>`,
})
export class IconComponent {
  @Input() iconCode = 'bi-0-circle';
  @Input() size = 20;
}
