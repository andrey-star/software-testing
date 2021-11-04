import { Component, Input, OnInit } from '@angular/core';
import { StickerPack } from '../../models/sticker-pack';

@Component({
  selector: 'app-sticker-set-preview',
  template: `
    <mat-card class="preview-card mat-elevation-z5">
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
    </mat-card>
  `,

  styles: [
    `
      .preview-card {
        max-width: 200px;
      }

      .preview-card:hover {
        background: rgba(0, 0, 0, 0.04);
      }
    `,
  ],
})
export class StickerPackPreviewComponent implements OnInit {
  @Input() stickerPack!: StickerPack;

  ngOnInit(): void {}
}
