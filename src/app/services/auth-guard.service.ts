import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  authenticated: boolean;
  constructor(public authenticationService: AuthenticationService) { }

  canActivate(): boolean {
    console.log('inside canActivate');
    return this.authenticationService.isAuthenticated();
  }
}
