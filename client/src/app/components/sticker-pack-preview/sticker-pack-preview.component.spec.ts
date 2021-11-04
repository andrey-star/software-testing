import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';
import { StickerPackPreviewComponent } from './sticker-pack-preview.component';

describe('StickerPackPreviewComponent', () => {
  let component: StickerPackPreviewComponent;
  let fixture: ComponentFixture<StickerPackPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StickerPackPreviewComponent],
      imports: [MatCardModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickerPackPreviewComponent);
    component = fixture.componentInstance;
    component.stickerPack = {
      id: 1,
      name: 'test pack',
      author: '@test',
      description: 'Funny test pack',
      previewUrl: 'https://abc.com',
      stickerUrls: [],
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders pack title', () => {
    const title = fixture.debugElement.query(
      By.css('.preview-card mat-card-title')
    );
    expect(title.nativeElement.textContent).toContain('test pack');
  });
});
