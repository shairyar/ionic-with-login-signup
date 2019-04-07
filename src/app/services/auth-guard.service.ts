import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  authenticated: boolean;
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
    ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.authenticationService.isAuthenticated().then(response => {
      if (response === true) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    });
  }
}
