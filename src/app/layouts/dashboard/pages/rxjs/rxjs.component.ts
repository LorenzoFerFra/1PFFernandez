import { Component } from '@angular/core';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent {
  constructor(){
    this.obtenerResultado();
  }

  async obtenerResultado(){
    console.log('Tu siguiente frase es true, verdad?')
    const falsaPromesa = new Promise((resolve,reje) =>{
      setTimeout(() => {
        resolve(true);
      }, 2000)
    } );

    await falsaPromesa.then((result) => {
      console.log(result)
      setTimeout(() => {
        console.log('nani');
      }, 1600)
    })
    
    console.log('fin')

  }
}
