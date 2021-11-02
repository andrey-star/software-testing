import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StickerPackPreviewComponent } from './sticker-pack-preview.component';

describe('StickerPackPreviewComponent', () => {
  let component: StickerPackPreviewComponent;
  let fixture: ComponentFixture<StickerPackPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StickerPackPreviewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickerPackPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
