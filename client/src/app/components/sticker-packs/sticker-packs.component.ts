import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StickerPack } from '../../models/sticker-pack';
import { StickerService } from '../../services/sticker.service';

@Component({
  selector: 'app-sticker-sets',
  template: `
    <a
      class="pack-link"
      *ngFor="let stickerPack of stickerPacks$ | async"
      [routerLink]="['/pack', stickerPack.id]"
    >
      <app-sticker-set-preview [stickerPack]="stickerPack">
      </app-sticker-set-preview>
    </a>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        padding-top: 15px;
      }

      .pack-link {
        text-decoration: none;
        margin: 15px;
      }
    `,
  ],
})
export class StickerPacksComponent {
  stickerPacks$: Observable<StickerPack[]>;

  constructor(private stickerService: StickerService) {
    this.stickerPacks$ = this.stickerService.getStickerPacks();
  }
}
