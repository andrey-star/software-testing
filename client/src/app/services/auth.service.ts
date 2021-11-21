import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../models/user';
import {TokenStorageService} from './token-storage.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$ = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient, private storage: TokenStorageService) {
    this.http.get<User>('/api/users/0', httpOptions).subscribe(
      (user) => {
        this.user$.next(user);
      },
      (error) => console.log('Unauthorized')
    );
  }

  login(username: string, password: string): void {
    this.http
      .post<AuthResponse>(
        '/api/auth/signin',
        {
          username,
          password,
        },
        httpOptions
      )
      .subscribe((resp) => {
        this.storage.saveToken(resp.jwt);
        this.user$.next(resp.user);
      });
  }

  register(username: string, password: string): void {
    this.http
      .post<AuthResponse>(
        '/api/auth/signup',
        {
          username,
          password,
        },
        httpOptions
      )
      .subscribe((resp) => {
        this.storage.saveToken(resp.jwt);
        this.user$.next(resp.user);
      });
  }

  logout() {
    this.storage.clearToken();
    this.user$.next(null);
  }
}

interface AuthResponse {
  user: User;
  jwt: string;
}
