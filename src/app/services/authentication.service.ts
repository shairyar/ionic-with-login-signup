import { Platform, NavController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

const STORED_USER = 'user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticationState = new BehaviorSubject(false);

  constructor(
    private storage: Storage,
    private platform: Platform,
    private navCtrl: NavController) {
    console.log('hello AuthenticationService');
    this.platform.ready().then(() => {
      this.checkUser();
    });
  }

  checkUser() {
    this.storage.get(STORED_USER).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    });
  }

  login(user) {
    console.log(user);
    return this.storage.set(STORED_USER, user).then(() => {
      this.authenticationState.next(true);
      this.navCtrl.navigateRoot('/articles');
    });
  }

  logout() {
    if (this.platform.is('ios')) {
      return this.storage.remove(STORED_USER).then(() => {
        this.authenticationState.next(false);
        this.navCtrl.navigateRoot('/login');
      });
    } else {
      return this.storage.remove(STORED_USER).then(() => {
        this.authenticationState.next(false);
        this.navCtrl.navigateRoot('');
      });
    }
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  getUser() {
    return this.storage.get(STORED_USER);
  }

  isLoggedIn(): Promise<boolean> {
    return this.getUser().then((user) => {
      return user ? true : false;
    })
    .catch((err) => {
      return false;
    });
  }
}
