import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { StickerPackPreviewComponent } from './components/sticker-pack-preview/sticker-pack-preview.component';
import { StickerPackComponent } from './components/sticker-pack/sticker-pack.component';
import { StickerPacksComponent } from './components/sticker-packs/sticker-packs.component';
import { authInterceptorProviders } from './services/auth.interceptor';

const firebaseConfig = {
  apiKey: 'AIzaSyBaQOqFMNUN5PL2po65txSjdCGNBYxdToY',
  authDomain: 'software-testing-f4e26.firebaseapp.com',
  projectId: 'software-testing-f4e26',
  storageBucket: 'software-testing-f4e26.appspot.com',
  messagingSenderId: '296199048867',
  appId: '1:296199048867:web:1d8eaa8dd23819f82b7916',
};

@NgModule({
  declarations: [
    AppComponent,
    StickerPackPreviewComponent,
    StickerPacksComponent,
    StickerPackComponent,
    HeaderComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
