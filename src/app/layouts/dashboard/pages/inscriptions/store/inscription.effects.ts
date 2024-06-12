import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { InscriptionActions } from './inscription.actions';
import { InscriptionService } from '../inscriptions.service';


@Injectable()
export class InscriptionEffects {

  loadInscriptions$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(InscriptionActions.loadInscriptions),
      concatMap(() =>
        
        this.inscriptionService.getInscriptions().pipe(
          // ok
          map(data => InscriptionActions.loadInscriptionsSuccess({ data })),
          // error al cargar inscripciones
          catchError(error => of(InscriptionActions.loadInscriptionsFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions, private inscriptionService: InscriptionService) {}
}
