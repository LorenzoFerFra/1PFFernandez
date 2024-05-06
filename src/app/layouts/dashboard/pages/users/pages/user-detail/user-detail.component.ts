import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  constructor(private userId: ActivatedRoute, private router: Router){
    this.userId.params.subscribe( {
      next: (i) => console.log(i),
    })
    console.log(this.userId.snapshot.params['id']);
  }

  cambiarParametro(): void {
    this.router.navigate(['dashboard', 'users', Math.random().toFixed(2)]);
  }

}
