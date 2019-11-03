import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {

  constructor(public afAuth: AngularFireAuth) { }

  @HostListener('click')
  onclick() {
    this.afAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider());
  }
}
