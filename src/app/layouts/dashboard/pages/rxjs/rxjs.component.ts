import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertsService } from '../../../../core/services/alerts.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent {
  constructor(private alertService: AlertsService
    ){
    // this.obtenerResultado();
    // this.runReloj();

    this.alertService.notifier$.next('notificador')
    this.alertService.notifier$.complete();
  }
  
  runReloj() {
    const obs = new Observable((observer) => {
      // observer.error('Hubo un error en la fucncion de obtener fecha')
      // setTimeout(() => {
      //   observer.next(new Date());
      // }, 2000);
      let counter = 0;
      setInterval(() => {
        counter++;
        if(counter === 5) observer.complete();
        observer.next(new Date());
      }, 3000);
      


    });
    obs.subscribe({
      next: (result) => {
        console.log(result)

      },
      error: (err) => {
        console.log(err)
        console.error(err)
      },  
      complete: () => {
        console.log("el reloj termino")
      }, 
    });
  }

  async obtenerResultado(){
    console.log('Tu siguiente frase es true, verdad?')
    const falsaPromesa = new Promise((resolve,reje) =>{
      setTimeout(() => {
        resolve(true);
      }, 2000)
    } );

    await falsaPromesa
    .then((result) => {
      console.log(result)
      setTimeout(() => {
        console.log('nani');
      }, 1600)
    })
    .catch();
    
    
    console.log('fin')

  }
}
