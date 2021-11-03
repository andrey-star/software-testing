import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { StickerPack } from '../models/sticker-pack';

@Injectable({
  providedIn: 'root',
})
export class StickerService {
  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getStickerPacks() {
    return this.http.get<StickerPack[]>(`${this.API_URL}/packs`);
  }

  getStickerPack(id: number): Observable<StickerPack> {
    return this.http.get<StickerPack>(`${this.API_URL}/pack?id=${id}`);
  }
}
