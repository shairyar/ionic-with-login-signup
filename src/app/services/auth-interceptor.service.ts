import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

import { ToastController } from '@ionic/angular';
import { from } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private storage: Storage, private toast: ToastController) {
    console.log('Hello AuthInterceptorService Service');
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.getUser().pipe(mergeMap(user => {
      console.log(user);
      if (user) {
        // clone and modify the request
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${user.authentication_token}`
          }
        });
      }

      return next.handle(request).pipe(tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // do stuff with response if you want
          }
        },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 500) {
              'There was a problem communicating with the server, please try again at a different time';
            } else {
              this.showMessage(err.error.message);
            }
          }
        }
      ));
    }));
  }

  getUser(): Observable<any> {
    return from(this.storage.get('user'));
  }

  async showMessage(message) {
    const toast = await this.toast.create({
      message: message,
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'Close',
      duration: 5000
    });
    toast.present();
  }
}
