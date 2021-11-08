import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    const authService = jasmine.createSpyObj('AuthService', [
      'googleSignIn',
      'signOut',
      'user$',
    ]);
    const user$ = new Subject<User | null>();
    const user = { email: 'a@b.c' };
    spyOnProperty(authService, 'user$', 'get').and.returnValue(user$);
    authService.signOut.and.callFake(() => {
      user$.next(user);
    });
    authService.googleSignIn.and.callFake(() => {
      user$.next(null);
    });
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [{ provide: AuthService, useValue: authService }],
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
    fixture.debugElement.query(By.css('.sign-in')).nativeElement.click();
    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css('.greeting')).nativeElement.textContent
    ).toContain('a@b.c');
  });
});
