import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { StudentActions } from './student.actions';
import { StudentsService } from '../students.service';


@Injectable()
export class StudentEffects {

  loadStudents$ = createEffect(() => {
    return this.actions$.pipe(
      //se puede madar un array para mandar mas de una accion
      ofType(StudentActions.loadStudents),
      concatMap(() =>
        this.studentsService.getStudents().pipe(
          //Caso correcto
          map(data => StudentActions.loadStudentsSuccess({ data })),
          //Catch error
          catchError(error => of(StudentActions.loadStudentsFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions, private studentsService: StudentsService) {}
}
