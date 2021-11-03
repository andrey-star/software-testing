import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StickerPack } from '../models/sticker-pack';

@Injectable({
  providedIn: 'root',
})
export class StickerService {
  private stickerPacks: StickerPack[] = [
    {
      id: 1,
      name: 'Pure Gold',
      author: '@andreystar',
      description: 'Funny pack with some memes',
      previewUrl:
        'https://www.meme-arsenal.com/memes/77cbb60bf5ee3f836a41be3582a38dc0.jpg',
      stickerUrls: [],
    },
    {
      id: 2,
      name: 'Pure Gold',
      author: '@andreystar',
      description: 'Funny pack with some memes',
      previewUrl:
        'https://www.meme-arsenal.com/memes/77cbb60bf5ee3f836a41be3582a38dc0.jpg',
      stickerUrls: [],
    },
    {
      id: 3,
      name: 'Pure Gold',
      author: '@andreystar',
      description: 'Funny pack with some memes',
      previewUrl:
        'https://www.meme-arsenal.com/memes/77cbb60bf5ee3f836a41be3582a38dc0.jpg',
      stickerUrls: [],
    },
  ];

  getStickerPacks() {
    return of(this.stickerPacks);
  }

  getStickerPack(id: number): Observable<StickerPack> {
    const pack = this.stickerPacks.find((pack) => pack.id === id);
    return of(pack!);
  }
}
