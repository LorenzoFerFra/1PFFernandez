import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription, delay, filter, forkJoin, map, of, take, takeUntil, tap } from 'rxjs';
import { IUser } from '../users/models/index';

@Component({
  selector: 'app-rxjs10',
  templateUrl: './rxjs10.component.html',
  styleUrl: './rxjs10.component.scss'
})
export class Rxjs10Component implements OnInit {


  cambiarElUsuario$ = new Subject<boolean>();
  usuarioAutenticado$ = new BehaviorSubject<IUser | null>(null);
  componenteDestruido$ = new Subject<boolean>();

  obtenerUsuarioSubscription?: Subscription;

  usuariosRxjs: IUser[] = [];
  roles: string[] = [];

  cargando = false;
  segundos = 0;
  


  getUsers(): Observable<IUser[]> {

    const USERS_DB: IUser[] = [
      {
        id: 1,
        name: 'mario',
        weight: 100,
        lastName: 'mario',
        email: 'mariomario@gmail.com',
        role: 'USER',
        createdAt: new Date(),
      },
      {
        id: 2,
        name: 'luigi',
        weight: 98,
        lastName: 'mario',
        email: 'luigimario@gmail.com',
        role: 'ADMIN',
        createdAt: new Date(),
      },
      {
        id: 3,
        name: 'fox',
        weight: 71,
        lastName: 'mcCloud',
        email: 'starfox@gmail.com',
        role: 'ADMIN',
        createdAt: new Date(),
      },
      
      
    ];

   return of(USERS_DB).pipe(delay(2500))
  }
  getRoles(): Observable<string[]> {
    return of(['ADMIN', 'USER', 'STUDENT', 'CHARACTER']).pipe(delay(1500))
  }


  login(): void{
    this.cambiarElUsuario$.next(true);
  }
  ngOnDestroy(): void{
    console.log('El componente se destruyo');
    this.componenteDestruido$.next(true);
    this.obtenerUsuarioSubscription?.unsubscribe(); 
  } 



  ngOnInit(): void {
    this.cargando = true;
    forkJoin([this.getUsers(), this.getRoles()]).subscribe({
      next: (value) => {
        this.usuariosRxjs = value[0];
        this.roles = value[1];
      },
      complete: () => {
        this.cargando = false;
      },
    });

    this.usuarioAutenticado$.subscribe(
      { next: (result) => {
        console.log(result)
      },}
    )

  this.cambiarElUsuario$.subscribe(  
    { next: (result) => {
      console.log(result)
      this.usuarioAutenticado$.next({
        id: 1,
        name: 'fede',
        weight: 98,
        lastName: 'luigi',
        email: 'fede@gmail.com',
        role: 'ADMIN', 
        createdAt: new Date(),
      })
    },}
  )
  

  // const obtenerUsuario$ = new Observable<number>((obs) => {
  //   let count = 0;
  //   setInterval(() => {
  //     count++;
  //     obs.next(count); 
  //   }, 1000)
  // });

  // this.obtenerUsuarioSubscription =  obtenerUsuario$.pipe(takeUntil(this.componenteDestruido$)).subscribe({
  //   next: (v) => console.log(v)
  // })
  

  // const obtenerUsuarioSubscription = obtenerUsuario$
  // .pipe(
  //   tap((counter) => {
  //     console.log('tap 1', counter)
  //   }),
  //   map((counter) => {
  //     console.log('map1', counter)
  //     return counter * 2;
  //   }),
  //   // filter((counter) => {
  //   //   return counter > 2;
  //   // }),
  //    tap((counter) => {
  //      console.log('tap 2', counter)  
  //    }),
  //   // filter((counter) => {
  //   //   return counter === 10;
  //   // }),
  //   )
  //   .subscribe({
  //   next: (result) => {
  //     console.log(result)

  //   },
  //   error: (err) => {
  //     console.error(err)
  //   },  
  //   complete: () => {
  //     console.log('terminado')
  //   }
  // });

}
}
