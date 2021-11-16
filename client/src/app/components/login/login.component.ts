import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div *ngIf="auth.user$ | async as user; else login">
      <h1 class="mat-display-1 greeting">
        Hello, {{ user.username ? user.username : 'Hello' }}!
      </h1>
      <button color="primary" mat-raised-button (click)="auth.logout()">
        Log out
      </button>
    </div>
    <ng-template #login>
      <div>
        <form (ngSubmit)="onSubmit()">
          <mat-form-field>
            <mat-label>Username</mat-label>
            <input
              matInput
              type="text"
              class="form-control"
              name="username"
              [(ngModel)]="form.username"
              #username="ngModel"
            />
          </mat-form-field>
          <mat-form-field>
            <mat-label>Password</mat-label>
            <input
              matInput
              type="password"
              class="form-control"
              name="password"
              [(ngModel)]="form.password"
              #password="ngModel"
            />
          </mat-form-field>
          <button mat-button type="submit" class="login">Login</button>
        </form>
      </div>
    </ng-template>
  `,
  styles: [],
})
export class LoginComponent {
  form: any = {
    username: null,
    password: null,
  };

  constructor(public auth: AuthService) {}

  onSubmit() {
    const { username, password } = this.form;
    this.auth.login(username, password);
  }
}
