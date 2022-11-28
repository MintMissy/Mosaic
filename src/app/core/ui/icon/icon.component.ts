import { Component } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `<span class="material-symbols-outlined"><ng-content></ng-content></span>`,
})
export class IconComponent {}
