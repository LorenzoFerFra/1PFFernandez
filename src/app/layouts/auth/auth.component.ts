import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit, OnDestroy {

  userChangeSubscription?: Subscription;

  constructor(private authService: AuthService, private router: Router ){}

  subscribeToAuthUserChange(): void {
    this.authService.authUser$.subscribe({
      next: (authUser) => {
        //si el usuario no es null, avanza a home
        if(authUser != null){
          this.router.navigate(['dashboard', 'home']);
        }
      }
    })
  }

  ngOnInit(): void {
    this.subscribeToAuthUserChange();
  }

  ngOnDestroy(): void {
    this.userChangeSubscription?.unsubscribe();
  }
  //escucha al observable en html, e inicia login en el auth service
  login(): void {
    this.authService.login();
  } 

}
