import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickerPackComponent } from './sticker-pack.component';

describe('StickerPackComponent', () => {
  let component: StickerPackComponent;
  let fixture: ComponentFixture<StickerPackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StickerPackComponent],
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
