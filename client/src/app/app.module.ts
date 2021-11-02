import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StickerPackPreviewComponent } from './components/sticker-pack-preview/sticker-pack-preview.component';
import { StickerPacksComponent } from './components/sticker-packs/sticker-packs.component';

@NgModule({
  declarations: [
    AppComponent,
    StickerPackPreviewComponent,
    StickerPacksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
