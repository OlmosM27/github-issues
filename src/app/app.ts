import { Component, ElementRef, isDevMode, signal, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { injectDevtoolsPanel } from '@tanstack/angular-query-devtools-experimental';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('github-issues');

  private readonly devtoolsHost = viewChild<ElementRef>('devtoolsHost');

  constructor() {
    if (isDevMode()) {
      injectDevtoolsPanel(() => ({ hostElement: this.devtoolsHost() }));
    }
  }
}
