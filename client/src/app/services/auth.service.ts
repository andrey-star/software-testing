import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<User | null>;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = this.afAuth.authState;
  }

  async googleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return await this.afAuth.signInWithPopup(provider);
  }

  async signOut() {
    return await this.afAuth.signOut();
  }
}
