import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { StickerPackPreviewComponent } from './components/sticker-pack-preview/sticker-pack-preview.component';
import { StickerPackComponent } from './components/sticker-pack/sticker-pack.component';
import { StickerPacksComponent } from './components/sticker-packs/sticker-packs.component';

@NgModule({
  declarations: [
    AppComponent,
    StickerPackPreviewComponent,
    StickerPacksComponent,
    StickerPackComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
