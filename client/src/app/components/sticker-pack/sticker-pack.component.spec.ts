import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { StickerService } from '../../services/sticker.service';

import { StickerPackComponent } from './sticker-pack.component';

describe('StickerPackComponent', () => {
  let component: StickerPackComponent;
  let fixture: ComponentFixture<StickerPackComponent>;

  beforeEach(async () => {
    const stickerService = jasmine.createSpyObj('StickerService', [
      'getStickerPack',
    ]);
    stickerService.getStickerPack.and.returnValue(
      of({
        id: 1,
        name: 'test pack',
        author: '@test',
        description: 'Funny test pack',
        previewUrl: 'https://abc.com',
        stickerUrls: [],
      })
    );
    await TestBed.configureTestingModule({
      declarations: [StickerPackComponent],
      providers: [
        { provide: StickerService, useValue: stickerService },
        {
          provide: ActivatedRoute,
          useValue: { paramMap: of(convertToParamMap({ id: 1 })) },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickerPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
