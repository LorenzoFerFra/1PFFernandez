import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { IUser } from './pages/users/models';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  showFiller = false;

  mostrarComponent = true;

  currentUser$: Observable<IUser | null>;

  isMobile(): boolean{
    return window.innerWidth <= 690;
  }

  constructor(private authServ: AuthService, private router: Router){
     this.currentUser$ = this.authServ.authUser$;
  }

  ngOnInit(): void {
    // console.log(this.currentUser$);
  }
    
    login(): void {
     this.authServ.login(); 
     this.router.navigate(['auth']);
    }
    logout(): void {
      this.authServ.logout();
      this.router.navigate(['auth']);
     }
}
