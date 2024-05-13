import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../../layouts/dashboard/pages/users/models';
import { LoginData } from '../../layouts/auth/models';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _authUser$ = new BehaviorSubject<IUser | null>(null);

  

  public authUser$ = this._authUser$.asObservable();
  private MOCK_AUTH_USER: IUser = {
    id: 1,
    name: 'lorenzo',
    weight: 98,
    lastName: 'luigi',
    email: 'lorenzo@gmail.com',
    role: 'ADMIN',
    createdAt: new Date(),
  };

  constructor(private router: Router) {}
  //emite el usuario y el observable auth user
  login(data: LoginData): void {
    if (data.email !== 'lorenzo@gmail.com' || data.password !== '123') {
      alert('Email o password incorrecto/s');
    } else {
        this._authUser$.next(this.MOCK_AUTH_USER);
        localStorage.setItem(
            'accessToken',
            'linea de caracteres x'
          );
          this.router.navigate(['dashboard', 'home']);
    }
  }
  // cuando se use base de datos remplazar por un obserbavle
    verifyToken(): boolean {
    const token = localStorage.getItem('accessToken');
    if (token) {
      this._authUser$.next(this.MOCK_AUTH_USER);
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this._authUser$.next(null);
    localStorage.removeItem(
        'accessToken'
      );

  }
}
