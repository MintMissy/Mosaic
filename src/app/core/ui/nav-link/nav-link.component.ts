import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-link',
  template: `
    <a [routerLink]="link" class="text-base font-semibold dark:text-white">
      <ng-content></ng-content>
    </a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavLinkComponent {
  @Input() link!: string;
}
