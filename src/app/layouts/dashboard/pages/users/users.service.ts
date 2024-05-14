import { Injectable } from '@angular/core';
import { CreateUserPayload, IUser } from './models';
import { Observable, catchError, delay, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';


@Injectable({providedIn: 'root'})
export class UsersService {
  constructor(private httpClient: HttpClient) {}
  
    getUsers(): Observable<IUser[]> {
      return this.httpClient.get<IUser[]>(environment.baseAPIURL + '/users')
        // return of(USERS_DB).pipe(delay(1500));
      }
  getUserById(id: string): Observable<IUser | undefined> {
    return this.httpClient.get<IUser>(environment.baseAPIURL + '/users/' + id)
    // return of(USERS_DB.find((element) => element.id === id)).pipe(delay(1500));
  }
  createUser(payload: CreateUserPayload): Observable<IUser> {
    return this.httpClient.post<IUser>(
      `${environment.baseAPIURL}/users`,
      payload
    );
  }
} 