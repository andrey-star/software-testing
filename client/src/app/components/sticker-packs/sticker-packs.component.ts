import { Component, OnInit } from '@angular/core';
import { StickerService } from '../../services/sticker.service';

@Component({
  selector: 'app-sticker-sets',
  template: `
    <app-sticker-set-preview
      *ngFor="let stickerPack of stickerPacks$ | async"
      [stickerPack]="stickerPack"
    >
    </app-sticker-set-preview>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: space-evenly;
      }
    `,
  ],
})
export class StickerPacksComponent implements OnInit {
  stickerPacks$ = this.stickerService.stickerPacks$;

  constructor(private stickerService: StickerService) {}

  ngOnInit(): void {}
}
