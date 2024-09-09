import { inject, Injectable } from '@angular/core';
import { signInWithEmailAndPassword, User, user } from '@angular/fire/auth';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private auth = inject(Auth);
  public user$ = user(this.auth);
  public userSubscription: Subscription;

  constructor(private router: Router) {
    this.userSubscription = this.user$.subscribe((aUser: User | null) => {
      console.log(aUser);
      //handle user state changes here. Note, that user will be null if there is no currently logged in user.
    })
  };
  
  public login(email: string = '', password: string = '') {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  public logout() {
    this.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
