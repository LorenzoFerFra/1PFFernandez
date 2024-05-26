import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ICurso } from '../models';

export const CursoActions = createActionGroup({
  source: 'Curso',
  events: {
    'Load Cursos': emptyProps(),
    'Load Cursos Success': props<{ data: ICurso[] }>(),
    'Load Cursos Failure': props<{ error: unknown }>(),
  }
});
