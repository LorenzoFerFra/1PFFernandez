import { Component } from '@angular/core';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proyectoAng';
 
  constructor() {
    if (!environment.currentlyProd) {
      console.log(environment, 'yippie');
    }
  }
}
