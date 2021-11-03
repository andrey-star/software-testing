import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { StickerPack } from '../../models/sticker-pack';
import { StickerService } from '../../services/sticker.service';

@Component({
  selector: 'app-sticker-pack',
  template: `
    <ng-container *ngIf="stickerPack$ | async; let pack">
      <h1>{{ pack.name }}</h1>
      <h3>{{ pack.author }}</h3>
      <p>{{ pack.description }}</p>
      <img
        *ngFor="let stickerUrl of pack.stickerUrls"
        [src]="stickerUrl"
        alt="Sticker"
      />
    </ng-container>
  `,
  styles: [],
})
export class StickerPackComponent {
  stickerPack$: Observable<StickerPack>;

  constructor(
    private stickerService: StickerService,
    private route: ActivatedRoute
  ) {
    this.stickerPack$ = this.route.paramMap.pipe(
      map((paramMap) => paramMap.get('id')),
      switchMap((id) => this.stickerService.getStickerPack(+id!))
    );
  }
}
