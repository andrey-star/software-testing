import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StickerPack } from '../models/sticker-pack';

@Injectable({
  providedIn: 'root',
})
export class StickerService {
  stickerPacks$: Observable<StickerPack[]>;

  constructor() {
    this.stickerPacks$ = of([
      {
        id: 1,
        name: 'Pure Gold',
        author: '@andreystar',
        description: 'Funny pack with some memes',
        previewUrl:
          'https://www.meme-arsenal.com/memes/77cbb60bf5ee3f836a41be3582a38dc0.jpg',
      },
      {
        id: 1,
        name: 'Pure Gold',
        author: '@andreystar',
        description: 'Funny pack with some memes',
        previewUrl:
          'https://www.meme-arsenal.com/memes/77cbb60bf5ee3f836a41be3582a38dc0.jpg',
      },
      {
        id: 1,
        name: 'Pure Gold',
        author: '@andreystar',
        description: 'Funny pack with some memes',
        previewUrl:
          'https://www.meme-arsenal.com/memes/77cbb60bf5ee3f836a41be3582a38dc0.jpg',
      },
    ]);
  }
}
