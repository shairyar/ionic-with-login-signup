import { Platform, NavController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable } from 'rxjs';

const STORED_USER = 'user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(
    private storage: Storage,
    private platform: Platform,
    private navCtrl: NavController) {
    console.log('hello AuthenticationService');

    this.platform.ready().then(() => {
      this.getUser().then(user => {
        this.currentUserSubject = new BehaviorSubject<any>(this.getUserstate(user));
        this.currentUser = this.currentUserSubject.asObservable();
      });
    });
  }

  login(user) {
    this.storage.set(STORED_USER, user).then(() => {
      this.navCtrl.navigateRoot('/articles');
    });
  }

  logout() {
    this.storage.remove(STORED_USER).then(() => {
      this.navCtrl.navigateRoot('/login');
    });
  }

  isAuthenticated() {
    return this.getUser().then(user => {
      this.currentUserSubject = new BehaviorSubject<any>(this.getUserstate(user));
      return this.currentUserSubject.value;
    });
  }

  getUser() {
    return this.storage.get(STORED_USER);
  }


  getUserstate(user) {
    return (user != null) ? true : false;
  }
}
