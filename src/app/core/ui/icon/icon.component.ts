import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `<i [ngClass]="['bi', iconCode]"></i>`,
})
export class IconComponent {
  @Input() iconCode = 'bi-0-circle';
}
