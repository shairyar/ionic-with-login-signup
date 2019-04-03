import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // api server
  public URL = 'http://0.0.0.0:3000/api/v1/';

  constructor(public http: HttpClient, private authenticatinService: AuthenticationService) {
  }


  signIn(user): Observable<any> {
    console.log('Sign In User: ', user);
    return this.http
      .post(`${this.URL}users/sign_in`, user)
      .pipe(
        (map(response => response)),
        catchError((error: any) => of(error))
      );
  }

  signUp(user): Observable<any> {
    return this.http
      .post(`${this.URL}users`, user)
      .pipe(
        (map(response => response)),
        catchError((error: any) => of(error))
      );
  }


  // id is actually a uuid of a user
  getGiftList(user_uuid): Observable<any> {
    return this.http
      .get(`${this.URL}users/${user_uuid}/gifts`)
      .pipe(
        (map(response => response)),
        catchError((error: any) => of(error))
      );
  }

  getGift(user_uuid, giftId): Observable<any> {
    return this.http
      .get(`${this.URL}users/${user_uuid}/gifts/${giftId}`)
      .pipe(
        (map(response => response)),
        catchError((error: any) => of(error))
      );
  }

  addGift(id, gift): Observable<any> {
    console.log('Gift : ', gift)
    return this.http
      .post(`${this.URL}users/${id}/gifts`, gift)
      .pipe(
        (map(response => response)),
        catchError((error: any) => of(error))
      );
  }

  editGift(userId, giftId, gift): Observable<any> {
    return this.http
      .put(`${this.URL}users/${userId}/gifts/${giftId}`, gift)
      .pipe(
        (map(response => response)),
        catchError((error: any) => of(error))
      );
  }

  deleteGift(id, gift_id): Observable<any> {
    return this.http
      .delete(`${this.URL}users/${id}/gifts/${gift_id}`)
      .pipe(
        (map(response => response)),
        catchError((error: any) => of(error))
      );
  }

}
