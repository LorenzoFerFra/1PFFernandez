import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { CursoActions } from './curso.actions';
import { CursosService } from '../cursos.service';


@Injectable()
export class CursoEffects {

  loadCursos$ = createEffect(() => {
    return this.actions$.pipe(
      //se puede madar un array para mandar mas de una accion
      ofType(CursoActions.loadCursos),
      concatMap(() =>
        this.cursosService.getCursos().pipe(
          //Caso correcto
          map(data => CursoActions.loadCursosSuccess({ data })),
          //Catch error
          catchError(error => of(CursoActions.loadCursosFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions, private cursosService: CursosService) {}
}
