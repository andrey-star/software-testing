import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StickerPack } from '../models/sticker-pack';

@Injectable({
  providedIn: 'root',
})
export class StickerService {
  constructor(private http: HttpClient) {}

  getStickerPacks() {
    return this.http.get<StickerPack[]>('/api/packs');
  }

  getStickerPack(id: number): Observable<StickerPack> {
    return this.http.get<StickerPack>(`/api/pack?id=${id}`);
  }
}
