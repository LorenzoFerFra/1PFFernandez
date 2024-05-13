import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  userChangeSubscription?: Subscription;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder ){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  // subscribeToAuthUserChange(): void {
  //   this.authService.authUser$.subscribe({
  //     next: (authUser) => {
  //       //si el usuario no es null, avanza a home
  //       if(authUser != null){
  //         this.router.navigate(['dashboard', 'home']);
  //       }
  //     }
  //   })
  // }

  ngOnInit(): void {
    // this.subscribeToAuthUserChange();
  }

  ngOnDestroy(): void {
    this.userChangeSubscription?.unsubscribe();
  }
  //escucha al observable en html, e inicia login en el auth service
  login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      this.authService.login((this.loginForm.getRawValue()));
    }
  } 

}
