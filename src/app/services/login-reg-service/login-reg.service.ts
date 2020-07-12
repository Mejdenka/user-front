import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { User } from 'src/app/model/user';

@Injectable()
export class LoginRegService {

  private _userUrl = 'http://localhost:8085/user';

  constructor(private _http: HttpClient) { }

  getUser(user): Observable<User> {
    return this._http.post<User>(this._userUrl + '/login', user).pipe(
      catchError(this.handleError));
  }

  regUser(user): Observable<User> {
    return this._http.post<User>(this._userUrl + '/register', user).pipe(
      catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return throwError(err.message);
  }
  
}
