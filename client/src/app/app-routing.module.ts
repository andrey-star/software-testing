import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StickerPacksComponent } from './components/sticker-packs/sticker-packs.component';

const routes: Routes = [{ path: '', component: StickerPacksComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
