import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StickerPackComponent } from './components/sticker-pack/sticker-pack.component';
import { StickerPacksComponent } from './components/sticker-packs/sticker-packs.component';

const routes: Routes = [
  { path: 'packs', component: StickerPacksComponent },
  {
    path: 'pack/:id',
    component: StickerPackComponent,
  },
  { path: '**', redirectTo: '/packs' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
