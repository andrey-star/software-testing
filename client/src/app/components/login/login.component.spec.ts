import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    const user$ = new Subject<User | null>();
    const user = { username: 'a@b.c' };
    const fakeAuthService = {
      user$,
      login(u: string, p: string) {
        user$.next(user);
      },
      logout() {
        user$.next(null);
      },
    };
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule],
      providers: [{ provide: AuthService, useValue: fakeAuthService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    fixture.debugElement.query(By.css('.login')).nativeElement.click();
    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css('.greeting')).nativeElement.textContent
    ).toContain('a@b.c');
  });
});
