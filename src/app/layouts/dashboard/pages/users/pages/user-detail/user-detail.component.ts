import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../users.service';
import { Observable, finalize } from 'rxjs';
import { IUser } from '../../models';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  user$: Observable<IUser | undefined>;
  cargando = false;

  constructor(private userId: ActivatedRoute, private router: Router, private userService: UsersService){
    this.cargando = true;
    // this.userId.params.subscribe( {
    //   next: (i) => console.log('OBSERVABLE', i['id']),
    // })

    // console.log('SNAPSHOT', this.userId.snapshot.params['id']);
    
    this.user$ = this.userService.getUserById(this.userId.snapshot.params['id']).pipe(
      finalize(() => {
        this.cargando = false;
      })
    );

  }

  cambiarParametro(): void {
    this.router.navigate(['dashboard', 'users', Math.random().toFixed(2)]);
  }

}
