import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/auth/auth.actions';
import { authUser } from '../../store/auth/auth.selectors';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  // userChangeSubscription?: Subscription;
  authUserSubscription?: Subscription;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder, private store: Store){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.authUserSubscription = this.store.select(authUser).subscribe({
      next: (user) => {
        if (user) this.router.navigate(['dashboard', 'home']);
      },
    });
  }

  ngOnDestroy(): void {
    // this.userChangeSubscription?.unsubscribe();
    this.authUserSubscription?.unsubscribe();
  }
  //escucha al observable en html, e inicia login en el auth service
  login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      this.store.dispatch(
        authActions.login({ payload: this.loginForm.getRawValue() })
      );
      // this.authService.login((this.loginForm.getRawValue()));
    }
  } 

}
