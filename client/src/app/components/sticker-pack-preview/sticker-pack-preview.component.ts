import { Component, Input, OnInit } from '@angular/core';
import { StickerPack } from '../../models/sticker-pack';

@Component({
  selector: 'app-sticker-set-preview',
  template: `
    <mat-card class="example-card">
      <mat-card-header>
        <mat-card-title>{{ stickerPack.name }}</mat-card-title>
        <mat-card-subtitle>{{ stickerPack.author }}</mat-card-subtitle>
      </mat-card-header>
      <img mat-card-image [src]="stickerPack.previewUrl" alt="Preview image" />
      <mat-card-content>
        <p>
          {{ stickerPack.description }}
        </p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button>LIKE</button>
        <button mat-button>SHARE</button>
      </mat-card-actions>
    </mat-card>
  `,

  styles: [
    `
      .example-card {
        max-width: 200px;
      }
    `,
  ],
})
export class StickerPackPreviewComponent implements OnInit {
  @Input() stickerPack!: StickerPack;

  ngOnInit(): void {}
}
