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
          map((data) => InscriptionActions.loadInscriptionsSuccess({ data })),
          // error al cargar inscripciones
          catchError((error) =>
            of(InscriptionActions.loadInscriptionsFailure({ error }))
          )
        )
      )
    );
  });

  createInscription$ = createEffect(() => {
    return this.actions$.pipe(
      //filtrar la accion para crear inscripcion
      ofType(InscriptionActions.createInscription),

      concatMap((action) =>
        //llama a al create insciption del servicio, se proporciona payload del servicio al actions a aqui
        this.inscriptionService.createInscription(action.payload).pipe(
          // funciona correctamente
          map((data) => InscriptionActions.createInscriptionSuccess({ data })),
          // catch error
          catchError((error) =>
            of(InscriptionActions.createInscriptionFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private inscriptionService: InscriptionService
  ) {}
}
