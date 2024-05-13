import { Injectable } from '@angular/core';
import { IUser } from './models';
import { Observable, catchError, delay, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class UsersService {
  constructor(private httpClient: HttpClient) {}
  
    getUsers(): Observable<IUser[]> {
      return this.httpClient.get<IUser[]>('http://localhost:4200/users')
        // return of(USERS_DB).pipe(delay(1500));
      }
  getUserById(id: number): Observable<IUser | undefined> {
    return this.httpClient.get<IUser[]>('http://localhost:4200/users/' + id)
    // return of(USERS_DB.find((element) => element.id === id)).pipe(delay(1500));
  }
} 