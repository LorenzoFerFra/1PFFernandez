import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../../layouts/dashboard/pages/users/models';


@Injectable({ providedIn: 'root' })
export class AuthService {
    authUser$ = new BehaviorSubject<IUser | null>(null);

    login(): void {
        this.authUser$.next({
            id: 1,
            name: 'fede',
            weight: 98,
            lastName: 'luigi',
            email: 'fede@gmail.com',
            role: 'ADMIN', 
            createdAt: new Date(),
          })


    }
}