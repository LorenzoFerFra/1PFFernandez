import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { MockProvider } from 'ng-mocks';

describe('AuthService', () => {
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, MockProvider(Router)],
    });
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('Tiene que establecer un usuario autenticado al llamar login, se guarde en el local storage, y te redireccione a home', () => {
    const spyOnSetItem = spyOn(localStorage, 'setItem');
    const spyOnNavigate = spyOn(router, 'navigate');
    authService.login({
      email: 'lorenzo@gmail.com',
      password: '123',
    });
    authService.authUser$.subscribe({
      next: (authUser) => {
        expect(authUser).toBeTruthy();  // Confirmar que el valor no sea null, undefined o false
        expect(spyOnSetItem).toHaveBeenCalled(); // Confirmar que se seteo en el localstorage
        expect(spyOnNavigate).toHaveBeenCalledWith(['dashboard', 'home']); // Confirmar que se redirecciono a home
        
      },
    });
  });

  it('Tiene que mostrar un alert que diga "Email o password incorrecto/s" si los datos no coinciden con el usuario', () => {

    const spyOnAlert = spyOn(window, 'alert');
    authService.login({
      email: 'test@gmail.com',
      password: '654321',
    });
    expect(spyOnAlert).toHaveBeenCalledWith('Email o password incorrecto/s');
  });
});
