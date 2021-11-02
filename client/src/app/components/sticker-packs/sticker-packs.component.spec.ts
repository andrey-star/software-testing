import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickerPacksComponent } from './sticker-packs.component';

describe('StickerPacksComponent', () => {
  let component: StickerPacksComponent;
  let fixture: ComponentFixture<StickerPacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StickerPacksComponent],
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
});
