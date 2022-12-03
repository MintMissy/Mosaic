import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Theme } from './core/model/theme.model';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  theme$!: Observable<Theme>;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.initializeTheme();
    this.theme$ = this.themeService.getThemeAsObservable();
  }

  nextTheme() {
    this.themeService.setNextTheme();
  }
}
