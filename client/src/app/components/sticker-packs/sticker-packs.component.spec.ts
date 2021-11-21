import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MatCardModule} from '@angular/material/card';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';
import {of} from 'rxjs';
import {StickerService} from '../../services/sticker.service';
import {StickerPackPreviewComponent} from '../sticker-pack-preview/sticker-pack-preview.component';

import {StickerPacksComponent} from './sticker-packs.component';

describe('StickerPacksComponent', () => {
  let component: StickerPacksComponent;
  let fixture: ComponentFixture<StickerPacksComponent>;

  beforeEach(async () => {
    const stickerService = jasmine.createSpyObj('StickerService', [
      'getStickerPacks',
    ]);
    stickerService.getStickerPacks.and.returnValue(
      of([
        {
          id: 1,
          name: 'test pack',
          author: '@test',
          description: 'Funny test pack',
          previewUrl: 'https://abc.com',
          stickerUrls: [],
        },
        {
          id: 2,
          name: 'test pack 2',
          author: '@test',
          description: 'Funny test pack 2',
          previewUrl: 'https://abc.com',
          stickerUrls: [],
        },
      ])
    );
    await TestBed.configureTestingModule({
      declarations: [StickerPacksComponent, StickerPackPreviewComponent],
      imports: [MatCardModule, RouterTestingModule],
      providers: [{provide: StickerService, useValue: stickerService}],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickerPacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders a preview for each sticker pack', () => {
    const previews = fixture.debugElement.queryAll(
      By.css('app-sticker-set-preview')
    );
    expect(previews.length).toEqual(2);
  });

  it('renders a router link for sticker pack', () => {
    const preview = fixture.debugElement.query(By.css('.pack-link'));
    expect(preview.attributes['href']).toEqual('/packs/1');
  });
});
