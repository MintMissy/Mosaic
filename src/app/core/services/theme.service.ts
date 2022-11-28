import { BehaviorSubject, Observable } from 'rxjs';

import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { CoreModule } from '../core.module';
import { Theme } from '../model/theme.model';

@Injectable({
  providedIn: CoreModule,
})
export class ThemeService {
  private _theme = new BehaviorSubject<Theme>('light');
  private _renderer!: Renderer2;

  constructor(@Inject(DOCUMENT) private document: Document, private rendererFactory: RendererFactory2) {
    this._renderer = rendererFactory.createRenderer(null, null);
  }

  public setTheme(theme: Theme): void {
    this._renderer.removeClass(this.document.body, this.getTheme());

    this._theme.next(theme);
    this.updateLocalStorage(theme);

    this._renderer.addClass(this.document.body, theme);
  }

  public getTheme(): Theme {
    return this._theme.getValue();
  }

  public getThemeAsObservable(): Observable<Theme> {
    return this._theme.asObservable();
  }

  public setNextTheme(): void {
    const nextTheme = this.getNextTheme();
    this.setTheme(nextTheme);
    this.updateLocalStorage(nextTheme);
  }

  public initializeTheme(): void {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    this.setTheme(savedTheme === null ? this.getPreferredTheme() : savedTheme);
  }

  private getNextTheme(): Theme {
    return this.getTheme() === 'light' ? 'dark' : 'light';
  }

  private updateLocalStorage(theme: Theme): void {
    localStorage.setItem('theme', theme);
  }

  private getPreferredTheme(): Theme {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
