import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Theme } from '../../model/theme.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Output() themeClick = new EventEmitter<void>();
  @Input() theme: Theme = 'light';
}
