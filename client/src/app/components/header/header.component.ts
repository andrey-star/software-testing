import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary">
      <span>Sticker Generator</span>
      <span class="spacer"></span>
      <a mat-button routerLink="/">Packs</a>
    </mat-toolbar>
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
