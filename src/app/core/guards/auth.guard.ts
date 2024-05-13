import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  console.log('authGuard');

  const router = inject(Router);
  const authService = inject(AuthService);
  
  const isAuth = authService.verifyToken();


  return isAuth || router.createUrlTree(['auth']);
  
  // cuando use api
  // return authService.authUser$.pipe(
  // map((authUser) => {
  // if (!authUser) {
  // return router.createUrlTree(['auth']);
  // }
  // return true;
  // }))
  
};
