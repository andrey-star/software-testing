import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div *ngIf="auth.user$ | async as user; else login">
      <h1 class="mat-display-1 greeting">
        {{ user.email ? user.email : 'Hello' }}
      </h1>
      <button color="primary" mat-raised-button (click)="auth.signOut()">
        Log out
      </button>
    </div>
    <ng-template #login>
      <div>
        <button
          class="sign-in"
          color="primary"
          mat-raised-button
          (click)="auth.googleSignIn()"
        >
          Login with Google
        </button>
      </div>
    </ng-template>
  `,
  styles: [],
})
export class LoginComponent {
  constructor(public auth: AuthService) {}
}
