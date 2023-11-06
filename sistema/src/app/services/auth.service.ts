import { Injectable, NgZone } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


    constructor(
        private firebaseAuthenticationService: AngularFireAuth,
        private router: Router
    ) {

      }
  googleSignIn() {
    return this.firebaseAuthenticationService.signInWithPopup(new GoogleAuthProvider).then(res => {

      this.router.navigate(['/listar-productos']);
      localStorage.setItem('token',JSON.stringify(res.user?.uid));

    }, err => {
      alert(err.message);
    })
  }


}