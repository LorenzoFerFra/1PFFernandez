import { Component, OnInit } from '@angular/core';
import { InscriptionService } from './inscriptions.service';
import { IInscription } from './models';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { InscriptionActions } from './store/inscription.actions';
import {
  selectInscriptionState,
  selectIsLoading,
  selectInscriptions,
} from './store/inscription.selectors';
import { selectCursosError } from '../cursos/store/curso.selectors';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
})
export class InscriptionsComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'userId',
    'studentId',
    'cursoId',
    'inscriptedAt',
    'actions',
  ];
  inscriptions: IInscription[] = [];
  inscriptions$: Observable<IInscription[]>;
  // cursos: ICurso[] = [];
  // students: IStudent[] = [];
  error$: Observable<unknown>;
  isLoading$: Observable<boolean>;
  constructor(
    private store: Store,
    private inscriptionService: InscriptionService
  ) {
    // Usar el selector para manejar el estado de carga de la pagina
    this.isLoading$ = this.store.select(selectIsLoading);
    // Obtener las inscripciones observables
    this.inscriptions$ = this.store.select(selectInscriptions);
    // catch error
    this.error$ = this.store.select(selectCursosError);;
  }

  ngOnInit(): void {
    this.store.dispatch(InscriptionActions.loadInscriptions());
  }

  delInscription(arg0: any) {
    throw new Error('Method not implemented.');
  }
  openDialog(_t95: any) {
    throw new Error('Method not implemented.');
  }

  loadInscriptions() {}
}
