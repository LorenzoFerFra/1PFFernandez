import { Injectable } from '@angular/core';
import { IUser } from './models';
import { Observable, catchError, delay, of, throwError } from 'rxjs';

const USERS_DB: IUser[] = [
    {
      id: 1,
      name: 'mario',
      weight: 100,
      lastName: 'mario',
      email: 'mariomario@gmail.com',
      role: 'USER',
      createdAt: new Date(),
    },
    {
      id: 2,
      name: 'luigi',
      weight: 98,
      lastName: 'mario',
      email: 'luigimario@gmail.com',
      role: 'ADMIN',
      createdAt: new Date(),
    },
    {
      id: 3,
      name: 'fox',
      weight: 71,
      lastName: 'mcCloud',
      email: 'starfox@gmail.com',
      role: 'ADMIN',
      createdAt: new Date(),
    },
    
    
  ]

@Injectable({providedIn: 'root'})
export class UsersService {
    getUsers() {
        return of(USERS_DB).pipe(delay(1500));
      }
      
  getUserById(id: number): Observable<IUser | undefined> {
    return of(USERS_DB.find((element) => element.id === id)).pipe(delay(1500));
  }
}