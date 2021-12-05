import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <mat-toolbar color="primary">
        <span>Sticker Generator</span>
        <span class="spacer"></span>
        <a mat-button routerLink="/">Packs</a>
        <a mat-button routerLink="/login">Login</a>
      </mat-toolbar>
    </header>
  `,
  styles: [
    `
      .spacer {
        flex: 1 1 auto;
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
